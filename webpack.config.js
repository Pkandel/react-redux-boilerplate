require('dotenv').config();
const webpack = process.env.REACT_ENV === 'development' ? require('./webpack.config.dev.js') : require('./webpack.config.prod.js');
module.exports = webpack;