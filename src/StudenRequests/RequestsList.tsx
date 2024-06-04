import { useContext } from "react";
import { RequestContext } from "../Context/RequestContext";
import { HouseCard } from "../HouseList/HouseCard";

const RequestList = () => {
    const {
        requests
    } = useContext(RequestContext);

    return (
        <ul className="flex flex-row flex-wrap justify-center items-center my-12 gap-4">
            {requests?.map((residence) => 
                <li key={residence.id}>
                    <HouseCard residency={residence}/>
                </li>
            )}
        </ul>
    )
}

export { RequestList }