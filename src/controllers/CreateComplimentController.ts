import { Request, Response } from "express";
import { CreateComplimentsService } from "../services/CreateComplimentsService";

class CreateComplimentController {
    async handle(req:Request, res:Response) {
        const { tag_id, user_receiver, message } = req.body;
        const { user_id: user_sender } = req;

        const createComplimentService = new CreateComplimentsService();
        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        return res.json(compliment);
    }
};

export { CreateComplimentController };