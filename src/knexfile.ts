import { Knex } from 'knex';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, '../dev.sqlite3'),
    },
    useNullAsDefault: true, // Required for sqlite3
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
      extension: 'ts',
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
      extension: 'ts',
    },
  },
  staging: {
    client: 'mysql2',
    connection: {
      host: process.env.STAGING_DB_HOST,
      port: Number(process.env.STAGING_DB_PORT),
      user: process.env.STAGING_DB_USER,
      password: process.env.STAGING_DB_PASSWORD,
      database: process.env.STAGING_DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
      extension: 'ts',
    },
  },
};

export default config;
