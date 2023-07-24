import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const getIdFromToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, `${process.env.JWTSECRETKEY}`);
      // @ts-ignore
      req.userId = decodedToken._id;
      next();
    } catch (err) {
      console.error(err);
      return res.status(403).json({
        message: 'Unexpected token',
      });
    }
  } else {
    return res.status(403).json({
      message: 'No access',
    });
  }
};
