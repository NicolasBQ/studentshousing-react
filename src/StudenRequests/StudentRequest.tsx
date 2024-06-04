import {
    Typography
} from "@material-tailwind/react";
import { Header } from "../Header";
import { RequestList } from "./RequestsList";

const StudentRequest = () => {
    return (
        <>
            <Header />
            <main className="w-full flex flex-col items-center">
                <Typography 
                    variant="h3"
                    placeholder='Student Residencies' 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                    className="text-blue-800"
                    >
                        Mis Solicitudes
                </Typography>

                <RequestList />
            </main>
        </>
    )
}

export { StudentRequest }