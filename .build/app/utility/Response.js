"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = void 0;
const formatResponse = (statusCodeResponse, messageResponse, dataResponse) => {
    if (dataResponse) {
        return {
            statusCode: statusCodeResponse,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: messageResponse,
                data: dataResponse,
            })
        };
    }
    else {
        return {
            statusCode: statusCodeResponse,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: messageResponse,
            })
        };
    }
};
const SuccessResponse = (data) => {
    return formatResponse(200, "success", data);
};
exports.SuccessResponse = SuccessResponse;
const ErrorResponse = (code = 1000, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error Occured";
        return formatResponse(code, errorMessage, errorMessage);
    }
    return formatResponse(code, `${error}`, error);
};
exports.ErrorResponse = ErrorResponse;
