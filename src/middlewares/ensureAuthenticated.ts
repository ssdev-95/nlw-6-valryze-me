import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { IPayload } from "../@types/types";

function ensureAuthenticated(req:Request, res:Response, next:NextFunction) {
    const [, token] = req.headers.authorization.split(' ');
    // const bareToken = req.headers.authorization;
    // const [, token] = bareToken.split(' ');
    
    if(!token) return res.status(401).end();
    
    try {
        const { sub } = verify(token, process.env.NODE_APP_SECRET_KEY) as IPayload;
        req.user_id = sub;

        return next();
    } catch (err) {
        res.status(401).end();
    }

    // retrieve user info
};

export { ensureAuthenticated };