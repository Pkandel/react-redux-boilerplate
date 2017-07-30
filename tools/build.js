// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../webpack.config';
import colors from 'colors';


process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log('Generating production build. This might take a while ...'.green);

webpack(config).run((error, stats) => {
    if (error) { // so a fatal error occurred. Stop here.
        console.log("Something went wrong".red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log("Something went wrong"));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log("Something went wrong"));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!'.green);

    return 0;
});