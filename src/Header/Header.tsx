import { 
    Typography,
} from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/16/solid";
import { UserCollapse } from "./UserCollapse";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full py-8 flex flex-row items-center justify-around">
            <div>
                <Link to={'/'}>
                    <HomeIcon className="w-16 h-16 text-blue-800"/>
                </Link>
            </div>

            <div>
                <Typography 
                variant="h1"
                placeholder='Student Residencies' 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
                className="text-blue-800"
                >
                    Residencias Estudiantes
                </Typography>
            </div>
            <div className="w-fit">
                <UserCollapse />
            </div>  
      </header>
    )
}

export { Header }