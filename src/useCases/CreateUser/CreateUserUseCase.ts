import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
    constructor(
       private usersRepository: IUsersRepository
    ) {}
    async execute(data: ICreateUserRequestDTO) {
       const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

       if(userAlreadyExists){
           throw new Error('User already exists');
       }

       const newUser = new User(data);
    }
}