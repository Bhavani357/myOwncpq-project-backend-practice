import connection from './knexdb';

async function dbConnection() {
  try {
    await connection.raw('SELECT 1');
    console.log('Database connection established successfully');
  } catch (err) {
    console.error('Error connecting to the database: ', err);
  }
}

export default dbConnection;
