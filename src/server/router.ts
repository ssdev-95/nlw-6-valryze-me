import express, { Request, Response } from 'express';
import { AddUserController } from '../controllers/AddUserController';
import { GetUsersController } from '../controllers/GetUsersController';

const router = express.Router();
const addUserController = new AddUserController();
const getUsersController = new GetUsersController();

router.get('/', (req:Request, res:Response) => res.json({ "status": 200, "data": "Kinda sus bro.. :D" }));
router.get('/users', getUsersController.handle);

router.post('/users/signup', addUserController.handle);

export { router };
