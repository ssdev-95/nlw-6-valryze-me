import { getCustomRepository } from "typeorm";
import { compare } from 'bcryptjs';
import { UsersRepositories } from "../repositories/UsersRepositories";
import { IUserAuthServiceProps } from "../types";
import { sign } from "jsonwebtoken";
require('dotenv/config');

class AuthUserService {

    async execute({ email, password }: IUserAuthServiceProps) {
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({
            email
        })

        if(!user) {
            throw new Error('Invalid email/password');
        }

        const passwordMatches = await compare(password, user.password)

        if(!passwordMatches) {
            throw new Error('Invalid email/password');
        }

        const token = sign({
            email: user.email
        }, process.env.NODE_APP_SECRET_KEY, {
            subject: user.id,
            expiresIn: '2h'
        })

        return token;
    }
};

export { AuthUserService };