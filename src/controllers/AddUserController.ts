import { Request, Response } from 'express';
import { AddUserService } from '../services/AddUserService';

class AddUserController {
  async handle (req:Request, res:Response) {
    const user = req.body;
    try {
      const addUserService = new AddUserService();

      const token = await addUserService.execute(user);

      if (token.trim()!=='') {
        console.log(token);
        return res.status(200).json({token: token});
      }

      return res.status(500).json({error: 'Something went wrong'});

    } catch (e) {
      console.log(e);
    }
  }
};

export { AddUserController };