import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config(); // Carga las variables de tu archivo .env [1]

export default new DataSource({
  type: 'postgres',
  // Usamos los nombres exactos de tu .env
  host: process.env.POSTGRES_HOST, 
  
  // SOLUCIÓN AL ERROR DE TIPO:
  // Usamos el operador || '5432' para garantizar un string y evitar el "undefined"
  // Además, cambiamos DB_PORT por POSTGRES_PORT para que coincida con tu archivo
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10), 
  
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  
  // Configuración de rutas para entidades y migraciones [2, 3]

  // Esta ruta sube un nivel (a src/) y busca en TODAS las subcarpetas 
  // cualquier archivo que termine en .entity.ts o .entity.js
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  // Asegúrate de que esta carpeta exista en src/migrations
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  // Seguridad: synchronize debe estar en false para usar migraciones [3, 4]
  synchronize: false, 
});