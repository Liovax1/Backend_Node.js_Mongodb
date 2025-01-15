import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import * as authService from '../services/auth.service';
import { sendEmail } from '../utils/email';
import bcrypt from 'bcrypt';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    await sendEmail(user.email, 'Compte créé', 'Votre compte a été créé avec succès.');
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.findUserByEmail(req.body.email);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      const { accessToken, refreshToken } = await authService.login(req.body.email, req.body.password);
      res.send({ user, accessToken, refreshToken });
    } else {
      res.status(401).send('Données de connexion incorrectes');
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    res.send(updatedUser);
  } catch (error) {
    res.status(404).send('Utilisateur non trouvé');
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.params.id);
    await userService.deleteUserById(req.params.id);
    await sendEmail(req.body.email, 'Compte supprimé', 'Votre compte a bien été supprimé.');
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(404).send('Utilisateur non trouvé');
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('Utilisateur non trouvé');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
