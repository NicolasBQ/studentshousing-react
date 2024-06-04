import { useContext } from "react";
import { ResidencyContext } from "../Context/ResidencyContext";
import { HouseCard } from "./HouseCard";

const HouseList = () => {
    const {
        filteredResidences
    } = useContext(ResidencyContext);

    if(!filteredResidences) {
        return <div>Loading...</div>
    }

    return (
        <ul className="flex flex-row flex-wrap justify-center items-center my-12 gap-4">
            {filteredResidences?.map((residence) => 
                <li key={residence.id}>
                    <HouseCard residency={residence}/>
                </li>
            )}
        </ul>
    )
}

export {
    HouseList
}