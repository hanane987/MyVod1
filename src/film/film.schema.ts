import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilmDocument = Film & Document;

@Schema()
export class Film {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  director: string;

  @Prop()
  genre: string;
}

export const FilmSchema = SchemaFactory.createForClass(Film);