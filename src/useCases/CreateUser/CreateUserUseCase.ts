import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor(
       private usersRepository: IUsersRepository,
       private mailProvider: IMailProvider,
    ) {}
    async execute(data: ICreateUserRequestDTO) {
       const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

       if(userAlreadyExists){
           throw new Error('User already exists');
       }

       const newUser = new User(data);

       await this.usersRepository.save(newUser);

       this.mailProvider.sendMail({
           to: {
               name: data.name,
               email: data.email
           },
           from:{
               name: 'Equipe do meu App',
               email: 'equipe@meuapp.com'
           },
           subject: 'Seja bem-vindo',
           body:'<p>Você já pode fazer login em nossa plataforma</p>'
       })
    }
}