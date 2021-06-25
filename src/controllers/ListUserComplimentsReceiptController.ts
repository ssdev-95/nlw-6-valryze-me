import { Request, Response } from "express";
import { ListUserComplimentsReceiptService } from "../services/ListUserComplimentsReceiptService";

class ListUserComplimentsReceiptController {
    async handle(req:Request, res: Response) {
        const listUserComplimentsReceiptService = new ListUserComplimentsReceiptService();
        const { user_id } = req;

        const compliments = await listUserComplimentsReceiptService.execute(user_id);

        return res.json(compliments);
    }
};

export { ListUserComplimentsReceiptController };