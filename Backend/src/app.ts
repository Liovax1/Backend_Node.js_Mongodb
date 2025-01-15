import express from 'express';
import { userRouter } from './routes/user.routes';
import { logger } from './middlewares/logger';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/users', userRouter);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error('Erreur non gérée:', err);
  res.status(500).send('Erreur interne du serveur');
});

export default app;
