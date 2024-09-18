const formatResponse = (statusCodeResponse: number, messageResponse: string, dataResponse:unknown) => {
    if (dataResponse){
        return {
            statusCode: statusCodeResponse,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ 
                message: messageResponse,
                data:dataResponse,
            })
        }
    }else {
        return {
            statusCode: statusCodeResponse,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ 
                message: messageResponse,
            })
        }
    }
}


export const SuccessResponse = (data: object) => {
    return formatResponse(200, "success", data)
}


export const ErrorResponse = (code=1000, error:unknown) => {
    if(Array.isArray(error)){
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error Occured"
        return formatResponse(code, errorMessage, errorMessage)
    }

    return formatResponse(code, `${error}`, error)
}