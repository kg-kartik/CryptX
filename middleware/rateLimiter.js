const rateLimit = require("express-rate-limit");

module.exports.rateLimiterUsingThirdParty = rateLimit({
    windowMs: 5 * 1000, // 24 hrs in milliseconds
    max: 2,
    message: "Using our precious resources too much. Hold down a little!",
    headers: true,
});
