import { useState, useEffect } from "react";
import { Residency } from "../types";

type useResidencesRes = {
    residences: Array<Residency> | undefined,
    filteredResidences:Array<Residency> | undefined,
    filterResidence: (newRes: Array<Residency> | undefined) => void
}

const useResidences = (): useResidencesRes => {
    const [residences, setResidences] = useState<Array<Residency>>();
    const [filteredResidences, setFilteredResidences] = useState<Array<Residency> | undefined>();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(residences => {
                setResidences(residences.residences);
                setFilteredResidences(residences.residences);
            });
    }, []);

    const filterResidence = (newRes: Array<Residency> | undefined) => {
        setFilteredResidences(newRes);
    }

    return {
        residences,
        filteredResidences,
        filterResidence
    }
}

export { useResidences }