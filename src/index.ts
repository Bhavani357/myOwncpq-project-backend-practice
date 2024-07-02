import app from './app';
import dbConnection from './dbConnection';

const PORT = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      'Failed to connect to the database. Server not started.',
      error,
    );
  });
