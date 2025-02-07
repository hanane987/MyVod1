import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { FilmModule } from './film/film.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/myovde'),
    UserModule,
    FilmModule,
  ],
  
})
export class AppModule {}