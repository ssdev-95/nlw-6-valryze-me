import { Request, Response } from "express";
import { ListAllTagsService } from "../services/ListAllTagsService";

class ListAllTagsController {
    async handle(req:Request, res:Response) {
        const listAllTagsService = new ListAllTagsService();
        const tags = await listAllTagsService.execute();

        return res.json(tags);
    }
};

export { ListAllTagsController };