import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('public/index.html','utf8', function(err, data) {
    if(err) throw err ;
    let $ = cheerio.load(data);
    $('head').prepend('<link rel="stylesheet" type="text/css" href="styles.css">');
    fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
        if(err) throw err;
        console.log('index.html is ready for production '.green);
    });
});