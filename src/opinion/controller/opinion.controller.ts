import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { OpinionService } from '../service/opinion.service';
import { OpinionDto } from '../dtos/opinion.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { File } from 'multer';


@Controller('opinion')
export class OpinionController {
    constructor(private readonly opinionService: OpinionService) {}

    // @Get()
    // findAll() {
    //     return this.opinionService.findAll();
    // }

    @Post()
    @UseInterceptors(FileInterceptor('foto')) // nombre del campo en el FormData
    async createOpinion(
        @Body() body: any, // FormData se parsea como objeto plano
    @UploadedFile() foto: File
  ) {
    console.log('Datos recibidos:', body);
    console.log('Archivo recibido:', foto?.originalname);
        
        return this.opinionService.create({ ...body, foto });
    }
}
