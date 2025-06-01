import { haspassword } from "../config/utils/auth";
import slug from "slug";
import User from "../models/User";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const createAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        // console.log(errors);
        // return;

        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400).json({ error: "USER_EXIST" });
            return; 
        }
        const handle = slug(req.body.handle, '');
        const handleExist = await User.findOne({  handle});

        if (handleExist) {
            res.status(400).json({ error: "HANDLE_EXIST" });
            return;
        }
        const user = new User(req.body);
        user.password  = await haspassword(password);
        user.handle = slug(handle);
        

        // console.log(slug(handle));
        await user.save();

        res.status(201).json({ message: "USER_CREATED" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};