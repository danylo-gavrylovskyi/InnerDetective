import express, { Request, Response } from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import { analyzeImage } from './utils/analyzeImage.js';
import { registration } from './controllers/Auth.js';

config();
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3001, () => console.log('Server working'));

await mongoose
  .connect(`${process.env.DBCONNECTION}`)
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err));

const upload = multer({ dest: 'uploads/' });

app.post('./api/registration', registration);

app.post('/api/analyze', upload.single('image'), async (req: Request, res: Response) => {
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
});
