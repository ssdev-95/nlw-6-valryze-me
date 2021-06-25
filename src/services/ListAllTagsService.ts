import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from 'class-transformer';

class ListAllTagsService {
    async execute() {
        const tagsRepository = getCustomRepository(TagsRepositories);

        const tags = await tagsRepository.find();
        
        return classToPlain(tags);
    } 
};

export { ListAllTagsService };