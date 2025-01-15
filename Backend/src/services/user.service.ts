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
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  return await createUserRepo(user);
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await findUserByEmailRepo(email);
};

export const updateUserById = async (id: string, updatedUser: Partial<User>): Promise<User | null> => {
  return await updateUserByIdRepo(id, updatedUser);
};

export const deleteUserById = async (id: string): Promise<void> => {
  console.log(id);
  return await deleteUserByIdRepo(id);
};

export const getAllUsers = async (): Promise<User[]> => {
  return await getAllUsersRepo();
};

export const getUserById = async (id: string): Promise<User | null> => {
  return await getUserByIdRepo(id);
};
