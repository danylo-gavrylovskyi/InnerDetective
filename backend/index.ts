import express, { Request, Response } from 'express';
import cors from 'cors';

//@ts-ignore
import { analyzeImage } from './controllers/analyzeImage.ts';

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3001, () => console.log('Server working'));

app.post('/api/analyze', (req: Request, res: Response) => {
  const imageData = analyzeImage(req.body.image);
  return res.json(imageData);
});
