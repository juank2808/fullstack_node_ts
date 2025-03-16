import User from "../models/User";
import { Request, Response } from "express";
export const createAccount  = async (req:Request, res:Response) => {
    const user = new User(req.body);
    user.save();
    res.send("USER_CREATED");
};