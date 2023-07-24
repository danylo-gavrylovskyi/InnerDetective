import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const getIdFromToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, `${process.env.JWTSECRETKEY}`) as JwtPayload;
      req.body.userId = decodedToken._id;
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
