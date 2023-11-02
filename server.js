const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception! 💣 Shutting down... ');
  console.log(err.name);
  console.log(err.stack);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {}).then(() => {
  console.log('DB connection successful');
});

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandler rejection! 💣 Shutting down... ');
  console.log(err.name, err.message, err.stack);
  server.close(() => {
    process.exit(1);
  });
});
