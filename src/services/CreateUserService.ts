import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repositories/UsersRepositories"
import { IUser } from "../types"

class CreateUserService {
    async execute({name, email, admin}: IUser) {
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

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
};

export { CreateUserService }