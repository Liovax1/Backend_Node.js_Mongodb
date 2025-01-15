import * as JwUtils from '../utils/jwt.utils';
import * as userService from './user.service';
import { User } from '../../types/userclear';

export const login = async (email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> => {
  try {
    const user: User | null = await userService.findUserByEmail(email);
    if (!user) throw new Error('Utilisateur non trouvé');

    const isPasswordCorrect = await JwUtils.comparePassword(password, user.password);
    if (!isPasswordCorrect) throw new Error('Mot de passe invalide');

    const accessToken = JwUtils.generateAccessToken({ email: email });
    console.log('AccessToken généré:', accessToken); // Ajoutez ce log
    const refreshToken = await JwUtils.generateRefreshToken({ email: email });
    console.log('RefreshToken généré:', refreshToken); // Ajoutez ce log
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error('Erreur lors de la connexion');
  }
};

export const logout = async (token: string): Promise<void> => {
  try {
    await JwUtils.deleteRefreshToken(token);
  } catch (error) {
    throw new Error('Erreur lors de la déconnexion');
  }
};

export const refreshAccessToken = async (refreshToken: string): Promise<{ accessToken: string }> => {
  try {
    const decoded = await JwUtils.verifyRefreshToken(refreshToken);
    const newAccessToken = JwUtils.generateAccessToken({ email: decoded.email });
    return { accessToken: newAccessToken };
  } catch (error) {
    throw new Error('Erreur lors du rafraîchissement du token d\'accès');
  }
};

export const verifyAccessToken = async (token: string): Promise<any> => {
  try {
    return JwUtils.verifyAccessToken(token);
  } catch (error) {
    throw new Error('Erreur lors de la vérification du token d\'accès');
  }
};