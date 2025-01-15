import ArticleModel from '../database/models/article.model';
import { Article } from '../../types/article';

export const createArticle = async (article: Article): Promise<Article> => {
  try {
    const newArticle = await ArticleModel.create(article);
    return newArticle;
  } catch (error) {
    throw error;
  }
};

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    const articles = await ArticleModel.find();
    return articles;
  } catch (error) {
    throw error;
  }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    const article = await ArticleModel.findById(id);
    return article;
  } catch (error) {
    throw error;
  }
};

export const updateArticleById = async (id: string, updatedArticle: Partial<Article>): Promise<Article | null> => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(id, updatedArticle, { new: true });
    return article;
  } catch (error) {
    throw error;
  }
};

export const deleteArticleById = async (id: string): Promise<void> => {
  try {
    await ArticleModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};