import { 
  createUser as createUserRepo, 
  findUserByEmail as findUserByEmailRepo, 
  updateUserById as updateUserByIdRepo, 
  deleteUserById as deleteUserByIdRepo, 
  getAllUsers as getAllUsersRepo, 
  getUserById as getUserByIdRepo 
} from '../repositories/user.repository';
import { User } from '../../types/user';
import bcrypt from 'bcrypt';

export const createUser = async (user: User): Promise<User> => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await createUserRepo(user);
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    return await findUserByEmailRepo(email);
  } catch (error) {
    throw new Error('Erreur lors de la recherche de l\'utilisateur par email');
  }
};

export const updateUserById = async (id: string, updatedUser: Partial<User>): Promise<User | null> => {
  try {
    return await updateUserByIdRepo(id, updatedUser);
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
  }
};

export const deleteUserById = async (id: string): Promise<void> => {
  try {
    console.log(id);
    return await deleteUserByIdRepo(id);
  } catch (error) {
    throw new Error('Erreur lors de la suppression de l\'utilisateur');
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    return await getAllUsersRepo();
  } catch (error) {
    throw new Error('Erreur lors de la récupération de tous les utilisateurs');
  }
};

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    return await getUserByIdRepo(id);
  } catch (error) {
    throw new Error('Erreur lors de la récupération de l\'utilisateur par ID');
  }
};
