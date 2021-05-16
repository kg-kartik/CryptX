const rateLimit = require("express-rate-limit");

module.exports.rateLimiterUsingThirdParty = rateLimit({
    windowMs: 5 * 1000,
    max: 10,
    statusCode: 200,
    message: {
        status: 429,
        limiter: true,
        type: "error",
        message: "Using our precious resources too much. Hold down a little!",
    },
    headers: true,
});
