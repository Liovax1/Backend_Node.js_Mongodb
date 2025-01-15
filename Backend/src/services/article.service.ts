import { 
  createArticle as createArticleRepo, 
  getAllArticles as getAllArticlesRepo, 
  getArticleById as getArticleByIdRepo, 
  updateArticleById as updateArticleByIdRepo, 
  deleteArticleById as deleteArticleByIdRepo 
} from '../repositories/article.repository';
import { Article } from '../../types/article';

export const createArticle = async (article: Article): Promise<Article> => {
  try {
    return await createArticleRepo(article);
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    throw new Error('Erreur lors de la création de l\'article');
  }
};

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    return await getAllArticlesRepo();
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw new Error('Erreur lors de la récupération des articles');
  }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    return await getArticleByIdRepo(id);
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article avec l'id ${id}:`, error);
    throw new Error('Erreur lors de la récupération de l\'article');
  }
};

export const updateArticleById = async (id: string, updatedArticle: Partial<Article>): Promise<Article | null> => {
  try {
    return await updateArticleByIdRepo(id, updatedArticle);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'article avec l'id ${id}:`, error);
    throw new Error('Erreur lors de la mise à jour de l\'article');
  }
};

export const deleteArticleById = async (id: string): Promise<void> => {
  try {
    await deleteArticleByIdRepo(id);
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'article avec l'id ${id}:`, error);
    throw new Error('Erreur lors de la suppression de l\'article');
  }
};
