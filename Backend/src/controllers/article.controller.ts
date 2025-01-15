import { Request, Response } from 'express';
import * as articleService from '../services/article.service';

export const createArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).send(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const articles = await articleService.getAllArticles();
    res.send(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getArticleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (article) {
      res.send(article);
    } else {
      res.status(404).send('Article non trouvé');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedArticle = await articleService.updateArticleById(req.params.id, req.body);
    res.send(updatedArticle);
  } catch (error) {
    res.status(404).send('Article non trouvé');
  }
};

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    await articleService.deleteArticleById(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send('Article non trouvé');
  }
};
