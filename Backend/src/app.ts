import express from 'express';
import { userRouter } from './routes/user.routes';
import { logger } from './middlewares/logger';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/users', userRouter);

export default app;
