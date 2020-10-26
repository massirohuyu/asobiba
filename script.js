const express = require('express');

const app = express();

app.use(express.static('docs'));

app.listen(8001, ()=> {
  console.log('Express Server');
});
