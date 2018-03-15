/* eslint-disable no-console */
import colors from 'colors';
import path from 'path';
import express from 'express';
import open from 'open';
import portfinder from 'portfinder';
import webpack from 'webpack';
import config from '../webpack.config.babel';

const app = express();

const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  },
  historyApiFallback: true

}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../src/api/mock_api')));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

portfinder.basePort = 3000 || process.env.PORT;
portfinder.getPort(function (err, port) {
  app.listen(port, function (err) {
    if (err) {
      console.log(err.red);
    } else {
      console.log(`Application running in development mode at http://localhost:${port}/`.green);
      open(`http://localhost:${port}`);
    }
  });
});
