import { Request, Response } from "express";
import * as authservice from '../services/auth.service';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const { accessToken, refreshToken } = await authservice.login(email, password);
        res.status(200).json({ email, accessToken, refreshToken });
    } catch (error) {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(400).json({ message: 'Aucun token fourni' });

    try {
        await authservice.logout(token);
        res.status(200).send('Déconnexion réussie');
    } catch (error) {
        res.status(500).json({ message: 'Erreur de déconnexion' });
    }
};

export const refreshAccessToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const { refreshToken } = req.body;
        const tokens = await authservice.refreshAccessToken(refreshToken);
        res.send(tokens);
    } catch (error) {
        res.status(401).send('Token de rafraîchissement invalide');
    }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(400).json({ message: 'Aucun token fourni' });
    try {
        const decoded = await authservice.verifyAccessToken(token);
        res.status(200).json({ accessToken: token, user: decoded });
    } catch (error) {
        res.status(401).json({ message: 'Token invalide' });
    }
};