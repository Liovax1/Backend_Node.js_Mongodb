import express from 'express';
import { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } from '../controllers/article.controller';

export const articleRouter = express.Router();

articleRouter.post('/', createArticle);
articleRouter.get('/', getArticles);
articleRouter.get('/:id', getArticleById);
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle);

export default articleRouter;
