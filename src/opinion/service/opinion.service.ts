import { Injectable } from '@nestjs/common';
import { OpinionEntity } from '../entities/opinion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpinionDto } from '../dtos/opinion.dto';

@Injectable()
export class OpinionService {
    opinions: OpinionEntity[] = [];

    constructor( @InjectRepository(OpinionEntity)
    private opinionRepo: Repository<OpinionEntity>) {}

    async findAll(): Promise<OpinionEntity[]> {
        this.opinions = await this.opinionRepo.find();
        return this.opinions;
    }

    async create(opinionDto: OpinionDto): Promise<OpinionEntity> {
        const newOpinion = this.opinionRepo.create(opinionDto);
        return this.opinionRepo.save(newOpinion);
    }
}
