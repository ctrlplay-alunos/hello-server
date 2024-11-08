const express = require('express');
const app = express();             
const port = 8000;             

app.get('/', (_req, res) => {
  res.send('Olá servidor!'); 
});

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
