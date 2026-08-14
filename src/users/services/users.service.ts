import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import {  UpdateUserDto } from '../dtos/update-user.dtio';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //trae todas las filas de la tabla users. Equivale a SELECT * FROM users;
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  //Buscar uno por id
  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return user;
  }
  // sirve para crear 
  async create(data: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const nuevoUsuario = this.userRepository.create({ ...data, password: hashedPassword });
    return await this.userRepository.save(nuevoUsuario);
  }
  // esto elimina por el id del usuario 
  async remove(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
  }

    // Sirve para actualizar parcialmente un usuario por ID
  async update(id: string, changes: UpdateUserDto): Promise<User> {
    // 1. Buscamos si el usuario existe (reutiliza tu método findOne)
    const user = await this.findOne(id);

    // 2. Si viene un nuevo password en los cambios, lo encriptamos
    if (changes.password) {
      changes.password = await bcrypt.hash(changes.password, 10);
    }

    // 3. Mezclamos los cambios sobre el usuario encontrado
    const usuarioEditado = this.userRepository.merge(user, changes);

    // 4. Guardamos los cambios en PostgreSQL
    return await this.userRepository.save(usuarioEditado);
  }

}

//Petición HTTP (curl / Swagger / Postman)
        
//users.controller.ts   (recibe, captura datos, define la ruta)
        
//users.service.ts      (ejecuta la acción real contra PostgreSQL con el Repository)
        
//respuesta de vuelta al usuario