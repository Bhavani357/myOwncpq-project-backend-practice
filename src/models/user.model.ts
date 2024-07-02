import knex from '../knexdb';

interface User {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export async function createUser(user: User): Promise<number[]> {
  return knex('users').insert(user);
}

export async function findUserByEmail(
  email: string,
): Promise<User | undefined> {
  return knex('users').where({ email }).first();
}
