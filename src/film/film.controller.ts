import { Controller, Post, Get, Param, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from './film.schema';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  async create(@Body() filmData: Partial<Film>) {
    return this.filmService.create(filmData);
  }

  @Get()
  async findAll() {
    return this.filmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const film = await this.filmService.findOne(id);
    if (!film) {
      throw new NotFoundException('Film not found');
    }
    return film;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() filmData: Partial<Film>) {
    const updatedFilm = await this.filmService.update(id, filmData);
    if (!updatedFilm) {
      throw new NotFoundException('Film not found');
    }
    return updatedFilm;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedFilm = await this.filmService.delete(id);
    if (!deletedFilm) {
      throw new NotFoundException('Film not found');
    }
    return deletedFilm;
  }
}