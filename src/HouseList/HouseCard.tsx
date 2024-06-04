import { useContext } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import React from "react";
import { Residency } from "../types";
import { RequestContext } from "../Context/RequestContext";

interface residencyProps {
    residency: Residency
}

const HouseCard: React.FC<residencyProps> = ({residency}) => {
    const {
        requests,
        addRequest
    } = useContext(RequestContext);

    return (
        <Card 
            className="mt-6 w-96" 
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}
        >
            <CardHeader 
                color="blue-gray" 
                className="relative h-56" 
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
            >
                <img
                src={residency.photo}
                alt="card-image"
                loading="lazy"
                />
            </CardHeader>
            <CardBody 
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
            >
                <Typography 
                    variant="h5" 
                    color="blue-gray" 
                    className="mb-2" 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                >
                    {residency.address}
                </Typography>
                <Typography 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                >
                    {residency.description}
                </Typography>
                <Typography 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                >
                    <span className="font-bold">Dueño: </span>{residency.owner.name}
                </Typography>
                <Typography 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                >
                    <span className="font-bold">Precio: </span>${residency.price}
                </Typography>
            </CardBody>
            <CardFooter 
                className="pt-0" 
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
            >
                <Button 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                    onClick={() => addRequest(residency)}
                    disabled={requests.some(req => req.id === residency.id) ? true : false}
                >
                    {residency.availability ? 'Solicitar' : 'Cancelar'}
                </Button>
            </CardFooter>
        </Card>
    )
}

export { HouseCard }