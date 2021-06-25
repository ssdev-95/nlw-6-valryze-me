import { Router } from 'express';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserComplimentsSentController } from './controllers/ListUserComplimentsSentController';
import { ListUserComplimentsReceiptController } from './controllers/ListUserComplimentsReceiptController';
import { ListAllTagsController } from './controllers/ListAllTagsController';
import { ListAllUsersController } from './controllers/ListAllUsersController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();
const listUserComplimentsSentController = new ListUserComplimentsSentController();
const listUserComplimentsReceiptController = new ListUserComplimentsReceiptController();
const listAllTagsController = new ListAllTagsController();
const listAllUsersController = new ListAllUsersController();

router.get('/users', ensureAuthenticated, listAllUsersController.handle);

router.get(
    '/users/compliments/receipt',
    ensureAuthenticated,
    listUserComplimentsReceiptController.handle
);

router.get(
    '/users/compliments/sent',
    ensureAuthenticated,
    listUserComplimentsSentController.handle
);

router.get('/tags', listAllTagsController.handle);

router.post('/users/create', createUserController.handle);
router.post('/tags/create', ensureAdmin, createTagController.handle);
router.post('/user/auth', authUserController.handle);

router.post(
    '/compliments/create',
    ensureAuthenticated, 
    createComplimentController.handle
);

export { router };