/* eslint-disable no-console */
import colors from 'colors';
import express from 'express';
import open from 'open';
import portfinder from 'portfinder';
import compression from 'compression';
import path from 'path';
require('dotenv').config();

const app = express();
app.use(compression());
app.use(express.static(path.resolve(__dirname, '../dist')));

portfinder.basePort = 3000;
portfinder.getPort(function (err, port) {
  if (err) console.log(err);
  app.listen(port, function (err) {
    if (err) {
      console.log(err.red);
    } else {
      console.log(`Application is running in production mode  at http://localhost:${port}/`.green);
      open(`http://localhost:${port}`);
    }
  });
});
