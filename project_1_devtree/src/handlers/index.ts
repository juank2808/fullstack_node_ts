import { haspassword } from "../config/utils/auth";
import User from "../models/User";
import { Request, Response } from "express";

export const createAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400).json({ error: "USER_EXIST" });
            return; 
        }

        const user = new User(req.body);
        user.password = await haspassword(password);
        await user.save();

        res.status(201).json({ message: "USER_CREATED" });
    } catch (error) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};