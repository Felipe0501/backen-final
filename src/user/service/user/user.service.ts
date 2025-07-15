import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { TokenEntity } from 'src/user/entities/token.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    user : User[]=[]

    constructor(
  @InjectRepository(User)
  private readonly userRepo: Repository<User>,

  private readonly jwtService: JwtService,

  @InjectRepository(TokenEntity)
  private readonly tokenRepository: Repository<TokenEntity>,
) {}



    async findAll(): Promise<User[]>{
        this.user= await this.userRepo.find();
        return this.user
    }

    public signUpUser(signUpUserdto): Promise<User[]>{
        const users = this.userRepo.create(signUpUserdto);
        return this.userRepo.save(users);
    }
    async validateUser(correo: string, contrasena: string): Promise<User | null> {
  const user = await this.userRepo.findOne({ where: { correo } });

  if (user && user.contrasena === contrasena) {
    return user;
  }

  return null;
}
  async loginUser(correo: string, contrasena: string): Promise<{ access_token: string; ruta: string } | null> {
  const user = await this.validateUser(correo, contrasena);
  if (!user) return null;

  const payload = { sub: user.id, correo: user.correo };
  const access_token = this.jwtService.sign(payload);

  await this.tokenRepository.save({
    user,
    token: access_token,
  });

  return {
    access_token,
    ruta: '/destinos',
  };

}
}

