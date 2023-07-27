import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import UserSchema from '../models/User.js';

config();

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserSchema.findOne({ username: req.body.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Incorrect login or password' });

    const token = jwt.sign({ _id: user._id }, `${process.env.JWTSECRETKEY}`, {
      expiresIn: process.env.JWTEXPIRESIN,
    });

    const { password, ...userData } = user;
    return res.status(200).json({
      ...userData,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Login failed',
    });
  }
};

export const registration = async (req: Request, res: Response) => {
  try {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json(validationErrors.array());
    }
    const { username, email } = req.body;
    const rawPassword = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(rawPassword, salt);

    const doc = new UserSchema({
      username,
      email,
      password: hash,
    });

    const user = await doc.save();
    const token = jwt.sign({ _id: user._id }, `${process.env.JWTSECRETKEY}`, {
      expiresIn: process.env.JWTEXPIRESIN,
    });

    const { password, ...userData } = user;
    return res.status(200).json({
      ...userData,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Registration failed',
    });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await UserSchema.findById(req.body.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    const { password, ...userData } = user;
    return res.status(200).json({ ...userData });
  } catch (err) {
    console.error(err);
    return res.status(403).json({
      message: 'No access',
    });
  }
};
