import { 
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/16/solid";

const UserCollapse = () => {
    return (
        <Menu>
            <MenuHandler>
                <Button 
                    disabled={false} 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined} 
                    className="bg-blue-50"
                >
                    <UserIcon className="w-6 h-6 text-blue-800"/>
                </Button>
            </MenuHandler>
            <MenuList 
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
            >
                <MenuItem 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                >
                    <Link to={'/requests'}>
                        <Typography 
                            placeholder={undefined} 
                            onPointerEnterCapture={undefined} 
                            onPointerLeaveCapture={undefined}
                        >
                            Mis peticiones
                        </Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export { UserCollapse }