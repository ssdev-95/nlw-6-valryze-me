import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

async function ensureAdmin(req:Request, res:Response, next:NextFunction) {
    const { user_id } = req;
    const usersRepository = getCustomRepository(UsersRepositories);
    const { admin } = await usersRepository.findOne(user_id);

    if(admin) {
        return next();
    }

    return res.status(401).json({error: 'Not an admin user.'});
}

export { ensureAdmin }