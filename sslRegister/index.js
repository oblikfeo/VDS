// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const httpServer = express();

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line no-undef
console.log(process.env.SSL_REGISTER_URL);

// eslint-disable-next-line no-undef
httpServer.get(process.env.SSL_REGISTER_URL, function (req, res) {
  // eslint-disable-next-line no-undef
  res.send(process.env.SSL_REGISTER_TEXT);
});

httpServer.listen(80);
