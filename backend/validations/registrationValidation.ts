import { body } from 'express-validator';

export const registrationValidation = [
  body('username').exists(),
  body('email', 'Incorrect e-mail format').isEmail(),
  body('password', 'Password must contain at least 6 symbols').isLength({ min: 6 }),
];
