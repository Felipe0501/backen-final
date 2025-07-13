import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OpinionController } from "./controller/opinion.controller";
import { OpinionService } from "./service/opinion.service";
import { OpinionEntity } from "./entities/opinion.entity";

@Module({
imports:[TypeOrmModule.forFeature([OpinionEntity])],
  controllers: [OpinionController],
  providers: [OpinionService, ]
})
export class OpinionModule {}