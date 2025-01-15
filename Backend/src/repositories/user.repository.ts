import UserModel from '../database/models/user.model';

export const createUser = async (user: any): Promise<any> => {
  try {
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
};

export const findUserByEmail = async (email: string): Promise<any> => {
  try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    throw new Error('Erreur lors de la recherche de l\'utilisateur par email');
  }
};

export const updateUserById = async (id: string, updatedUser: any): Promise<any> => {
  try {
    const user = await UserModel.findByIdAndUpdate(id, updatedUser, { new: true });
    return user;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
  }
};

export const deleteUserById = async (id: string): Promise<void> => {
  try {
    await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Erreur lors de la suppression de l\'utilisateur');
  }
};

export const getAllUsers = async (): Promise<any[]> => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw new Error('Erreur lors de la récupération de tous les utilisateurs');
  }
};

export const getUserById = async (id: string): Promise<any> => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    throw new Error('Erreur lors de la récupération de l\'utilisateur par ID');
  }
};