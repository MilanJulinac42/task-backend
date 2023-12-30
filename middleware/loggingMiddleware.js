const winston = require("winston");
const { format } = winston;

const logFormat = format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
);

const logger = winston.createLogger({
    level: "info",
    format: logFormat,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
        new winston.transports.File({ filename: "logs/combined.log" }),
    ],
});

const loggingMiddleware = (req, res, next) => {
    const logInfo = {
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get("User-Agent"),
    };

    logger.info("Request received", logInfo);

    res.on("finish", () => {
        const logResponseInfo = {
            status: res.statusCode,
            contentLength: res.get("Content-Length"),
        };

        logger.info("Response sent", logResponseInfo);
    });

    next();
};

module.exports = loggingMiddleware;
