const express = require('express');
const path = require('path');
const open = require('open');
var portfinder = require('portfinder');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    quiet: true,
    publicPath: config.output.publicPath,
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