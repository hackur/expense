import path from 'path';
import config from './config';
import express from 'express';
import multipart from 'connect-multiparty';
import session from 'express-session';
import compress from 'compression';
import bodyParser from 'body-parser';
import favicon from 'static-favicon';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import serveStatic from 'serve-static';
import errorHandler from 'errorhandler';

import routes from '../routes/expenses';

module.exports = function(db, logger, rootPath) {
  var app = express();

  app.logger = logger;

  // set port, routes, models and config paths
  app.set('port', config.PORT);
  app.set('routes', rootPath + '/routes/');
  app.set('models', rootPath + '/models/');

  // app.set 'views', rootPath + '/../client/app/'
  app.set('config', config);

  // ensure all assets and data are compressed - above static
  app.use(compress());

  // setting the favicon and static folder
  app.use(favicon(path.join(rootPath, '../client/assets/favicon.ico')));
  app.use(serveStatic(path.join(rootPath, '/../client/')));

  // cookie parser - above session
  app.use(cookieParser(config.COOKIE_SECRET));

  // body parsing middleware - above methodOverride()
  app.use(bodyParser());
  app.use(multipart());
  app.use(methodOverride());

  app.get('/', function(req, res) {
    res.render('../index.html');
  });

  routes(app);

  app.use((err, req, res, next) => {
    logger.error(err.toString());
    next();
  });

  if (config.ENV === 'development') {
    app.use(errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  }

  return app;
};
