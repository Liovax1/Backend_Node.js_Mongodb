import { 
  createArticle as createArticleRepo, 
  getAllArticles as getAllArticlesRepo, 
  getArticleById as getArticleByIdRepo, 
  updateArticleById as updateArticleByIdRepo, 
  deleteArticleById as deleteArticleByIdRepo 
} from '../repositories/article.repository';
import { Article } from '../../types/article';

export const createArticle = async (article: Article): Promise<Article> => {
  return await createArticleRepo(article);
};

export const getAllArticles = async (): Promise<Article[]> => {
  return await getAllArticlesRepo();
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  return await getArticleByIdRepo(id);
};

export const updateArticleById = async (id: string, updatedArticle: Partial<Article>): Promise<Article | null> => {
  return await updateArticleByIdRepo(id, updatedArticle);
};

export const deleteArticleById = async (id: string): Promise<void> => {
  return await deleteArticleByIdRepo(id);
};
