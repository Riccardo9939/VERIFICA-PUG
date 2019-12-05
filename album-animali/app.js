const express = require('express'); 
const animali = require('./animali.json'); 
const app = express();
const path = require('path');
var cors = require('cors'); 
app.use(cors()); 

app.set('view engine', 'pug');

app.get('/api/album-animali', (req, res) => {
   res.sendFile(path.join(__dirname, 'animali.json'));
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Animali',
    animali: animali.animals
  });
});

app.get('/album', (req, res) => {
  const an = animali.animals.find(c => c.id_figurina === req.query.id_figurina);
  res.render('album', {
    title: `Animale: ${an.specie_animale}`,
    an,
  });
});



const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});