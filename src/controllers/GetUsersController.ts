import { Request, Response } from 'express';

class GetUsersController {
    async handle(req:Request, res:Response) {
        const { authorization } = req.headers;

        if (authorization) {
            return res.status(200).json({ status: 'Authorized' });
        }

        return res.status(300).json({ status: 'Unauthorized' });
    }
}

export { GetUsersController };