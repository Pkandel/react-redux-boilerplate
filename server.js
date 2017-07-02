const express = require('express');
const path = require('path');
const open = require('open');
var portfinder = require('portfinder');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
require('dotenv').config();

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    // These settings suppress noisy webpack output so only errors are displayed to the console.
    noInfo: false,
    quiet: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
        },
}));
app.use(require('webpack-hot-middleware')(compiler, {log: () => { }}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


portfinder.basePort = 3000 || process.env.PORT;
portfinder.getPort(function (err, port) {
app.listen(port, function (err) {
    if(err) {
        console.log(err);
     } else {
    console.log(`Listening at http://localhost:${port}/`);
    open(`http://localhost:${port}`);
    } 
});
});