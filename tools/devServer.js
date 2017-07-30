 /* eslint-disable no-console */
import colors from 'colors';
import express from 'express';
import open from 'open';
import portfinder from 'portfinder';
import webpack from 'webpack';
import config from '../webpack.config.dev';

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

// app.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, '../public/index.html'));
// });
app.use(express.static('public'));
portfinder.basePort = 3000 || process.env.PORT;
portfinder.getPort(function (err, port) {
app.listen(port, function (err) {
    if(err) {
        console.log(err.red);
     } else {
    console.log(`Listening at http://localhost:${port}/`.green);
    open(`http://localhost:${port}`);
    } 
});
});