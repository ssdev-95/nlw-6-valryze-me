import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreayeTagController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users/create', createUserController.handle);
router.post('/tags/create', createTagController.handle);

export { router };