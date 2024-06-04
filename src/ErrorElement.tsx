import { useRouteError } from "react-router-dom";
import { useErrorResponse } from "./hooks/useErrorElements";

const ErrorElement = () => {
    const error = useRouteError();
    const errorResponse = useErrorResponse({error});

    return <h1>Page does not exist, error {errorResponse}</h1>
}   


export {
    ErrorElement
}