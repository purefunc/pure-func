const { createLogger, format, transports } = require("winston");

const myTransports = {
  console: new transports.Console({
    format: format.combine(format.colorize(), format.simple()),
    level: "info"
  }),
  file: new transports.File({
    filename: "drew-site-error.log",
    level: process.env.REPORTING || "error"
  })
};

const logger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: "drew-site" },
  transports: []
});

if (process.env.REPORTING !== "off") {
  logger.add(myTransports.file);
}

if (process.env.NODE_ENV !== "production") {
  logger.add(myTransports.console);
}

module.exports = logger;
