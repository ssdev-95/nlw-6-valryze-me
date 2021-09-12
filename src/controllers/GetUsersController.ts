import { Request, Response } from 'express';
import { GetUsersService } from '..//services/GetUsersService';

class GetUsersController {
    async handle(req:Request, res:Response) {
        const { authorization } = req.headers;
        const getUsersService = new GetUsersService();

        const users = await getUsersService.execute();

        if (!authorization || authorization.trim()==="") {
            return res.status(300).json({ status: 'Unauthorized' });
        }

        return res.status(200).json({ users: users });
    }
}

export { GetUsersController };