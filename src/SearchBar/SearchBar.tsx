import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { ResidencyContext } from "../Context/ResidencyContext";

const SearchBar = () => {
    const {
        searchResidence
    } = useContext(ResidencyContext);

    return (
        <div className="w-96 flex justify-center">
            <Input 
                label="Buscar residencia" 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined} 
                crossOrigin={undefined}
                onChange={searchResidence}
            />
        </div>
    )
}

export { SearchBar }