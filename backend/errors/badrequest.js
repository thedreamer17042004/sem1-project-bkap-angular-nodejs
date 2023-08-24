const CustomAPIError = require('./custome_api');
const { StatusCodes } = require('http-status-codes');

class badRequest extends CustomAPIError {
    constructor(message) {
        super(message);

        this.statusCode = StatusCodes.BAD_REQUEST;
    };
};

module.exports = badRequest;