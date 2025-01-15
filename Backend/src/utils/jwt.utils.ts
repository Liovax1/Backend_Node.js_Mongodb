import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const accessTokenSecret = 'test';
const refreshTokenSecret = 'test2';

export const generateAccessToken = (payload: object): string => {
  return jwt.sign(payload, accessTokenSecret, { expiresIn: '1m' });
};

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, refreshTokenSecret, { expiresIn: '1m' });
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
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const deleteRefreshToken = async (token: string): Promise<void> => {
};
