import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const accessTokenSecret = 'test';
const refreshTokenSecret = 'test2';

export const generateAccessToken = (payload: object): string => {
  try {
    return jwt.sign(payload, accessTokenSecret, { expiresIn: '1m' });
  } catch (error) {
    throw new Error('Erreur lors de la génération du token d\'accès');
  }
};

export const generateRefreshToken = (payload: object): string => {
  try {
    return jwt.sign(payload, refreshTokenSecret, { expiresIn: '1m' });
  } catch (error) {
    throw new Error('Erreur lors de la génération du token de rafraîchissement');
  }
};

export const verifyAccessToken = (token: string): any => {
  try { 
    const decoded = jwt.verify(token, accessTokenSecret);
    console.log('Token décodé:', decoded); 
    return decoded;
  } catch (error) {
    throw new Error('Token d\'accès invalide');
  }
};

export const verifyRefreshToken = (token: string): any => {
  try {
    return jwt.verify(token, refreshTokenSecret);
  } catch (error) {
    throw new Error('Token de rafraîchissement invalide');
  }
};

export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw new Error('Erreur lors de la comparaison des mots de passe');
  }
};

export const deleteRefreshToken = async (token: string): Promise<void> => {
  try {
    // Ajoutez ici la logique pour supprimer le token de rafraîchissement
  } catch (error) {
    throw new Error('Erreur lors de la suppression du token de rafraîchissement');
  }
};
