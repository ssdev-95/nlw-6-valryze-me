import { Request, Response } from "express";
import { ListUserComplimentsSentService } from "../services/ListUserComplimentsSentService";

class ListUserComplimentsSentController {
    async handle(req: Request, res: Response) {
        const listUserComplimentsSentService = new ListUserComplimentsSentService();
        const {user_id} = req;
        const compliments = await listUserComplimentsSentService.execute(user_id);

        return res.json(compliments)
    }
};

export { ListUserComplimentsSentController };