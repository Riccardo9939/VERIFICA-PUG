const express = require('express'); 
const app = express();
const path = require('path');
var cors = require('cors'); 

app.get('/api/album-animali', (req, res) => {
   res.sendFile(path.join(__dirname, 'animali.json'));
});




const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});