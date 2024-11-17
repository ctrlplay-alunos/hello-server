const express = require('express');
const app = express();                          

app.get('/', (_req, res) => {
  res.send('Hello server!'); 
});

app.listen(8000, () => {
  console.log("O servidor está rodando em http://localhost:8000");
});
