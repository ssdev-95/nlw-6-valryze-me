import { Request, Response } from "express";
import { ListAllUsersService } from "../services/ListAllUsersService";

class ListAllUsersController {
    async handle(req:Request, res: Response) {
        const listAllUsersService = new ListAllUsersService();
        const users = await listAllUsersService.execute();

        return res.json(users);
    }
};

export { ListAllUsersController };