import { Router } from 'express';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const complimentController = new CreateComplimentController();

router.post('/users/create', createUserController.handle);
router.post('/tags/create', ensureAdmin, createTagController.handle);
router.post('/user/auth', authUserController.handle);
router.post('/compliments/create', complimentController.handle);

export { router };