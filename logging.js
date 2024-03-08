function printStatus (requestParams, response, context, ee, next) {
    return next();
}

module.exports = {
    printStatus: printStatus
}