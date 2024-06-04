import { createContext } from "react";
import { useResidences } from "../hooks/useResidences";
import { Residency } from "../types";

interface contextState {
    filteredResidences: Array<Residency> | undefined,
    searchResidence: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface residencyProviderProps {
    children: React.ReactNode
}


const ResidencyContext = createContext({} as contextState);

const ResidencyProvider:React.FC<residencyProviderProps> = ({ children }) => {
    const {
        residences,
        filteredResidences,
        filterResidence
    } = useResidences();

    const searchResidence = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        const newResidences = residences?.filter(residence => 
            residence.address.toLowerCase().includes(value) ||
            residence.description.toLowerCase().includes(value) ||
            residence.owner.name.toLowerCase().includes(value) 
        )
        filterResidence(newResidences);
    }

    return (
        <ResidencyContext.Provider value={{
            filteredResidences,
            searchResidence
        }}>
            {children}
        </ResidencyContext.Provider>
    )
}


export {
    ResidencyContext,
    ResidencyProvider
}