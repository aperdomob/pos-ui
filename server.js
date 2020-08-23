
const express = require('express');

const app = express();

app.use(express.static('./dist/pos-ui'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: './dist/pos-ui'
  });
});

app.listen(process.env.PORT || 8080);
