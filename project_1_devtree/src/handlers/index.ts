import { haspassword, comparePassword } from "../config/utils/auth";
import slug from "slug";
import User from "../models/User";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const createAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        
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

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const user = await User.findOne({ email });
        console.log(user.password);
        if (!user) {
            res.status(404).json({ error: "USER_NOT_FOUND" });
            return;
        }
        
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            res.status(400).json({ error: "INVALID_CREDENTIALS" });
            return;
        }

        res.status(200).json({ message: "LOGIN_SUCCESS"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }

};