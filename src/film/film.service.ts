import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film, FilmDocument } from './film.schema';

@Injectable()
export class FilmService {
  constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>) {}

  async create(filmData: Partial<Film>): Promise<Film> {
    const newFilm = new this.filmModel(filmData);
    return newFilm.save();
  }

  async findAll(): Promise<Film[]> {
    return this.filmModel.find().exec();
  }

  async findOne(id: string): Promise<Film | null> { // Allow null return type
    return this.filmModel.findById(id).exec();
  }

  async update(id: string, filmData: Partial<Film>): Promise<Film | null> { // Allow null return type
    return this.filmModel.findByIdAndUpdate(id, filmData, { new: true }).exec();
  }

  async delete(id: string): Promise<Film | null> { // Allow null return type
    return this.filmModel.findByIdAndDelete(id).exec();
  }
}