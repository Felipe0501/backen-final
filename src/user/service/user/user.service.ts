import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    user : User[]=[]

    constructor(@InjectRepository(User)
    private userRepo : Repository<User>, private jwtService: JwtService){}


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

  // Si estás usando bcrypt, aquí va el compare
  if (user && user.contrasena === contrasena) {
    return user;
  }

  return null;
}
  async loginUser(correo: string, contrasena: string): Promise<{ access_token: string, ruta: string } | null> {
  const user = await this.validateUser(correo, contrasena);
  if (!user) return null;

  const payload = { correo: user.correo, sub: user.id };
  const token = this.jwtService.sign(payload);
  return { access_token: token, ruta: '/destinos' };
}
}

