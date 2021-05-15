const rateLimit = require("express-rate-limit");

module.exports.rateLimiterUsingThirdParty = rateLimit({
    windowMs: 5 * 1000,
    max: 2,
    statusCode: 200,
    message: {
        status: 429, // optional, of course
        limiter: true,
        type: "error",
        message: "Using our precious resources too much. Hold down a little!",
    },
    headers: true,
});
