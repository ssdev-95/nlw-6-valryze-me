import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repositories/UsersRepositories";
import { IUser } from "../@types/types";

class CreateUserService {
    async execute({name, email, admin=false, password}: IUser) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error('Invalid email')
        };

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error('User already exists!')
        };

        const passHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passHash
        });

        await usersRepository.save(user);

        return user;
    }
};

export { CreateUserService }