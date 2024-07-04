const errors = {
    VALIDATION_ERROR:400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    SERVER_ERROR:500,
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
            });
            break;
        case errors.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
            });
        default:
            break;
    };
}
module.exports = errorHandler;