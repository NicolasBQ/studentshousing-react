import { isRouteErrorResponse } from "react-router-dom";

interface errorProps {
    error: unknown,
}

const useErrorResponse = ({ error }: errorProps) => {
    let errorResponse: string = '';

    if(isRouteErrorResponse(error)) {
        errorResponse = `${error.status} ${error.statusText}`;
    } else if(error instanceof Error) {
        errorResponse = error.message;
    } else if(typeof error === 'string') {
        errorResponse = error;
    } else {
        errorResponse = 'Unkown Error';
    }

    return errorResponse;
}


export { useErrorResponse }

