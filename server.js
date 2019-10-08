const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Foothills Animal Shelter';

app.get('/', (request, response) => {
  response.send('Loading Adoptable Pet Friends');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});