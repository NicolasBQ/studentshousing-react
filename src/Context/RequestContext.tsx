import { createContext, useState } from "react";
import { Residency } from "../types";

interface contextState {
    requests: Array<Residency> | [],
    addRequest: (residency: Residency) => void,
}

interface providerProps {
    children: React.ReactNode
}

const RequestContext = createContext({} as contextState);


const RequestProvider: React.FC<providerProps> = ({ children }) => {
    const [requests, setRequests] = useState<Array<Residency> | []>([]);

    const addRequest = (residency: Residency) => {
        setRequests(curr => [...curr, residency]);
    }
    
    return(
        <RequestContext.Provider value={{
            requests,
            addRequest
        }}>
            {children}
        </RequestContext.Provider>
    )
} 

export {
    RequestProvider,
    RequestContext
}