import { Body, Controller, Get, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LoginDto } from 'src/user/dtos/login.dto';
import { Userdto } from 'src/user/dtos/user.dto';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
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
     // endpoint  login
  // @Post('login')
  // async login(@Body() loginDto: LoginDto) {
  // const user = await this.userService.validateUser(loginDto.correo, loginDto.contrasena);

  //   if (!user) {
  //     throw new UnauthorizedException('Credenciales incorrectas');
  //   }

  //   // Puedes devolver solo los datos necesarios o token si luego agregas JWT
  //   return {
  //     message: 'Acceso exitoso',
  //     user: {
  //       id: user.id,
  //       correo: user.correo,
  //       contrasena: user.contrasena
  //     }
  //   };
  // }
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const token = await this.userService.loginUser(
      loginDto.correo,
      loginDto.contrasena,
    );

    if (!token) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return token; // { access_token: '...' }
  }
  @Get('perfil')
  @UseGuards(JwtAuthGuard)
  getPerfil(@Request() req) {
    return {
      mensaje: 'Ruta protegida ✅',
      usuario: req.user, // Viene del payload del token
    };
  }

}

