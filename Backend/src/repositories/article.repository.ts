import ArticleModel from '../database/models/article.model';
import { Article } from '../../types/article';

export const createArticle = async (article: Article): Promise<Article> => {
  try {
    const newArticle = await ArticleModel.create(article);
    return newArticle;
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    throw new Error('Erreur lors de la création de l\'article');
  }
};

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    const articles = await ArticleModel.find();
    return articles;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw new Error('Erreur lors de la récupération des articles');
  }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    const article = await ArticleModel.findById(id);
    return article;
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article avec l'id ${id}:`, error);
    throw new Error('Erreur lors de la récupération de l\'article');
  }
};

export const updateArticleById = async (id: string, updatedArticle: Partial<Article>): Promise<Article | null> => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(id, updatedArticle, { new: true });
    return article;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'article avec l'id ${id}:`, error);
    throw new Error('Erreur lors de la mise à jour de l\'article');
  }
};

export const deleteArticleById = async (id: string): Promise<void> => {
  try {
    await ArticleModel.findByIdAndDelete(id);
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'article avec l'id ${id}:`, error);
    throw new Error('Erreur lors de la suppression de l\'article');
  }
};