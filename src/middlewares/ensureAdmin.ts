import { NextFunction, Request, Response } from "express";

function ensureAdmin(req:Request, res:Response, next:NextFunction) {
    const isAdmin = true;

    if(isAdmin) return next();

    return res.status(401).json({error: 'Not an admin user.'});
}

export { ensureAdmin }