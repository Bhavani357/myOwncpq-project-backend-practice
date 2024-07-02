import { Knex } from 'knex';

async function seed(knex: Knex): Promise<void> {
  await knex('users').insert([
    {
      id: 1,
      firstname: 'Durga',
      lastname: 'yasarla',
      email: 'durga232@gmail.com',
      password: 'password123',
    },
    {
      id: 2,
      firstname: 'ram',
      lastname: 'g',
      email: 'ram.g@gmail.com',
      password: '3849kl',
    },
    {
      id: 3,
      firstname: 'srikanth',
      lastname: 'endaluri',
      email: 'srikanth.endaluri@example.com',
      password: 'password483',
    },
  ]);
}
export default seed;
