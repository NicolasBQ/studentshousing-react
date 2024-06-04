type Residency = {
    id: number,
    address: string,
    city: string,
    price: number,
    description: string,
    photo: string,
    availability: boolean,
    owner: {
        id: number,
        name: string,
        email: string
    }
}

export {
    Residency
}