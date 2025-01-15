import express, { Request, Response } from 'express';
import { userRouter } from './routes/user.routes';
import articleRouter from './routes/article.routes';
import { logger } from './middlewares/logger';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());
app.use(logger);
app.use('/users', userRouter);
app.use('/articles', articleRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Route non trouvée');
});

mongoose.connect('mongodb+srv://liova:root@cluster0.myqsw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connecté à MongoDB');
    app.listen(port, () => {
      console.log("Le serveur tourne sur le port :", port);
    });
  })
  .catch((error) => {
    console.log('Erreur de connexion à MongoDB', error.message);
  });