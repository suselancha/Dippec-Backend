import { Module } from '@nestjs/common';
import { PersonalsService } from './personals.service';
import { PersonalsController } from './personals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personal } from './entities/personal.entity';

@Module({
  controllers: [PersonalsController],
  providers: [PersonalsService],
  imports: [
    TypeOrmModule.forFeature([ Personal ])
  ]
})
export class PersonalsModule {}
