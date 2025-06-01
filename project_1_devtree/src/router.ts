import { Router } from 'express';
import { createAccount } from './handlers';
import { body } from 'express-validator'
const router = Router();

router.post(
    '/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('Handle is required'),
    body('email')
        .isEmail()
        .notEmpty()
        .withMessage('Email is invalid'),
    body('name')
        .notEmpty()
        .withMessage('Name is required'),
    body('password')
        .isLength({ min: 8 }),
    createAccount
);

export default router;