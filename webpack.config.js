require('dotenv').config();
const webpack = process.env.REACT_ENV === 'development' ? require('./webpack.config.dev.js') : require('./webpack.config.prod.js');
console.log(`Webpack running in ${process.env.REACT_ENV} mode`);
module.exports = webpack;