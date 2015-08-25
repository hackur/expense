import winston from 'winston';
import fs from 'fs';
import config from './config';

var logPath = config.LOGPATH;

if (!fs.existsSync(logPath)) {
  fs.openSync(logPath, 'w');
}

var myCustomLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  },
  colors: {
    debug: 'grey',
    info: 'green',
    warn: 'orange',
    error: 'red'
  }
};

var level = config.ENV === 'development' ? 'debug' : 'info';

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: level,
      colorize: true
    }), new winston.transports.File({
      filename: logPath,
      level: level
    })
  ],
  levels: myCustomLevels.levels
});

winston.addColors(myCustomLevels.colors);

logger.info("Logger configured");

export default logger;
