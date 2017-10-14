const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(info => {
  return `${info.timestamp} [${info.level}] - ${info.message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

module.exports = logger;