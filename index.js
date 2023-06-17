import app from './server.js';
import mongodb from 'mongodb';
import 'dotenv/config'; // using ES6? require('dotenv').config()
// const reviewsDAO = require('./dao/reviewsDAO.js');

// console.log(process.env);
const MongoClient = mongodb.MongoClient;
const mongo_username = process.env.API_USER;
const mongo_password = process.env.API_PASSWORD;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.ownf0gn.mongodb.net/?retryWrites=true&w=majority`;

const port = 8000;

MongoClient.connect(uri, {
  maxPoolSize: 50, //option
  wtimeoutMS: 2500, //option
  useNewUrlParser: true, //option
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => console.log(`listening on port ${port}`));
  });
