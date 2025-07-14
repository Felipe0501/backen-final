import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/user/dtos/login.dto';
import { Userdto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    getUser(){
        return this.userService.findAll();
    }

    @Post()
    SignUpUser(@Body() signUpUserdto: Userdto){
        return this.userService.signUpUser(signUpUserdto);
    }
     // 🔐 Nuevo endpoint de login
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
  const user = await this.userService.validateUser(loginDto.correo, loginDto.contrasena);

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Puedes devolver solo los datos necesarios o token si luego agregas JWT
    return {
      message: 'Acceso exitoso',
      user: {
        id: user.id,
        correo: user.correo,
        contrasena: user.contrasena
      }
    };
  }
}

