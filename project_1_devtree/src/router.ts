import { Router } from 'express';
import { createAccount, login } from './handlers';
import { body } from 'express-validator'
import { handleValidationErrors } from './middleware/validation';
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
    handleValidationErrors,
    createAccount
);
router.post(
    '/auth/login',
    body('email')
        .isEmail(), 
    body('password')
        .isLength({ min: 8 }),
    login
)

export default router;