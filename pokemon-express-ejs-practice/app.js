const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
  const pokemon = [
  {name: 'Charizard', type: 'fire-type'},
  {name: 'Blastoise', type: 'water-type'},
  {name: 'Venasaur', type: 'grass-type'},
  ];
  res.render('index', {pokemon});
});