import express from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import { registration, login, getMe } from './controllers/auth.js';
import { registrationValidation } from './validations/registrationValidation.js';
import { analyze } from './controllers/analyze.js';
import { getIdFromToken } from './utils/getIdFromToken.js';

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

app.get('/api/me', getIdFromToken, getMe);

app.post('/api/login', login);

app.post('/api/registration', registrationValidation, registration);

app.post('/api/analyze', upload.single('image'), analyze);
