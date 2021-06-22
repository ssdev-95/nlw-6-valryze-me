import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController()

router.post('/create-user',createUserController.handle);

export { router };