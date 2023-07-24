import { Request, Response } from 'express';

import { analyzeImage } from '../utils/analyzeImage.js';

export const analyze = async (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.path;
    if (!imagePath) return res.status(400).json({ message: 'No image file' });
    const imageData = await analyzeImage(imagePath);
    return res.json(imageData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Cant get image detections',
    });
  }
};
