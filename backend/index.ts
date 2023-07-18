import express from 'express';

const app = express();
app.use(express.json());
app.listen(666, () => console.log('Server working'));
