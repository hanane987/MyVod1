import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { Film, FilmSchema } from './film.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }])],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}