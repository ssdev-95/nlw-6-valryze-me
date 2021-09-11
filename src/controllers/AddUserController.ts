import { Request, Response } from 'express';
import { AddUserService } from '../services/AddUserService';

class AddUserController {
  async handle (req:Request, res:Response) {
    const user = req.body;
    const addUserService = new AddUserService();

    const token = await addUserService.execute(user);

    if (token.trim()!=='') {
      return res.json({status: 200, token: token});
    }

    return res.json({status: 300, error: 'Unauthorized'});
  }
};

export { AddUserController };