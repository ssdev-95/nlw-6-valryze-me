import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { IComplimentServiceProps } from "../@types/types";

class CreateComplimentsService {
    async execute({ tag_id, user_receiver, user_sender, message }: IComplimentServiceProps) {
        const complimentRepository = getCustomRepository(ComplimentsRepositories);
        const userRepository = getCustomRepository(UsersRepositories);
        
        if(user_sender === user_receiver) {
            throw new Error('Cannot self send compliments');
        }

        const userReceiver = userRepository.findOne(user_receiver);

        if(!userReceiver) {
            throw new Error('User Receiver does not exists');
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
};

export { CreateComplimentsService };