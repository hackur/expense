import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import logger from './config/logger';

var rootPath = __dirname;

// catch all uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Something very bad happened: ', err.message);
  logger.error(err.stack);
  process.exit(1); // because now, you are in unpredictable state!
});

// bootstrap db connection
var db = mongoose.connect(config.DBURL);
logger.info("mongo connected to", config.DBURL);

// exit on db connection error
mongoose.connection.on('error', (err) => {
  logger.error("mongodb error: " + err);
  process.exit(1);
});

// retry 10 times on db connection lost
var attempt = 1;
mongoose.connection.on('disconnected', () => {
  if (attempt < 10) {
    logger.error("mongodb disconnected, trying to reconnect..");
    logger.info("mongodb reconnect, attempt num " + attempt);
    attempt += 1;
    db = mongoose.connect(config.DBURL);
  } else {
    logger.error("mongodb disconnect, giving up!");
  }
});

// bootstrap models
import models from './models/expense'

// express configuration
import app from "./config/express"
var application = app(db, logger, rootPath);

// start the app
application.listen(config.PORT, () => {
  logger.info("menu application's server listening on " + ("port " + (config.PORT) + " in " + config.ENV + " mode"));
});
