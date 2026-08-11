import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255, select: false })
  password!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  viva_goku?: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    hola_mundp?: Date;

     @Column({ type: 'varchar', length: 150, unique: true })
  prueba1?: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  prueba2?: string;


}