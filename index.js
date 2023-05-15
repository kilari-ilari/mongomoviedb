const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

// MongoDB YHTEYS
// Asenna Mongoose. Mongoose on Node.js:n ja MongoDB tietokannan oliomallinnus kirjasto (ODM = Object Document Mapping),
// jolla voi käsitellä MongoDB titetokantaa JavaScript olioilla.
// Salasana SALASANA kohtaan connection stringiin 
// Vaihda tietokannan nimi mongodb:n connection stringiin ennen kysymysmerkkiä: /TÄHÄN?retryWrites=true&w=majority';

// Malli:

  // const mongoose = require('mongoose');
  // const mongoURL = 'YOUR_CONNECTION_STRING';
  // mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
  // const db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'MongoDB connection error'));

const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://xxxxxx:SALASANA@cluster0.gdbvuqp.mongodb.net/moviedb?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});