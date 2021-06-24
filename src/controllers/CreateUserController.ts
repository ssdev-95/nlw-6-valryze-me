import { CreateUserService } from '../services/CreateUserService';
import { Request, Response } from 'express';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, admin, password } = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin, password});

        return res.json(user);
    };
};

export { CreateUserController };