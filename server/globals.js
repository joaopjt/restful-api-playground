const knex = require('knex');
const isProd = (process.env.NODE_ENV == 'prod') ? true : false;
var knexConfig = require('../knexfile');

knexConfig = (isProd) ? knexConfig.production : knexConfig.development;

var DB = knex(knexConfig);

var appGlobals = {
  isProd: isProd,
  server: {
    host: '0.0.0.0',
    port: (process.env.PORT) ? process.env.PORT : 3000,
    routes: {
      files: {
        relativeTo: process.cwd() + '/public'
      }
    }
  },
  https: {
    enable: isProd,
    options: {}
  }
}

global.App = appGlobals;
global.DB = DB;