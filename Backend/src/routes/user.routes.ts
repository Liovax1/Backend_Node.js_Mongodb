import express, { Request, Response } from 'express';
import { registerUser, loginUser, updateUser, deleteUser, getUsers, getUserById } from '../controllers/user.controller';
import { refreshAccessToken, getMe } from '../controllers/auth.controller';

export const userRouter = express.Router();

userRouter.post('/register', (req: Request, res: Response) => registerUser(req, res));
userRouter.post('/login', (req: Request, res: Response) => loginUser(req, res));
userRouter.put('/:id', (req: Request, res: Response) => updateUser(req, res));
userRouter.delete('/:id', (req: Request, res: Response) => deleteUser(req, res));
userRouter.get('/', (req: Request, res: Response) => getUsers(req, res));
userRouter.get('/me', (req: Request, res: Response) => getMe(req, res));
userRouter.get('/:id', (req: Request, res: Response) => getUserById(req, res));
userRouter.post('/refreshToken', (req: Request, res: Response) => refreshAccessToken(req, res));

export default userRouter;
