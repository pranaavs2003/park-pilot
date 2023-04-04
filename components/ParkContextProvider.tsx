'use client'
import React, { Dispatch, SetStateAction, useState, createContext } from "react";

interface ParkDataProps {
    email: string;
    numberPlate: string;
    phoneNumber: string;
    username: string;
    cost: number;
    entryTime: string;   // As of now store as string change later
    exitTime: string;    // As of now store as string change later
    timeDiff: number;    // In minutes
    status: boolean;
};

interface ParkContextProps {
    park: ParkDataProps;
    setPark: Dispatch<SetStateAction<ParkDataProps>>;
    isPark: boolean;
    setIsPark: Dispatch<SetStateAction<boolean>>;
};

interface ParkContextProviderProps{
    children: React.ReactNode;
};

export const ParkContext = createContext<ParkContextProps>({
    park: {
        email: "",
        numberPlate: "",
        phoneNumber: "",
        username: "",
        cost: 0,
        entryTime: "",   // As of now store as string change later
        exitTime: "",    // As of now store as string change later
        timeDiff: 0,    // In minutes
        status: false,
    },
    setPark: () => {},
    isPark: false,
    setIsPark: () => {},
});

export default function ParkContextProvider({ children } : ParkContextProviderProps) {
    const [park, setPark] = useState<ParkDataProps>(
        {
            email: "",
            numberPlate: "",
            phoneNumber: "",
            username: "",
            cost: 0,
            entryTime: "",   // As of now store as string change later
            exitTime: "",    // As of now store as string change later
            timeDiff: 0,    // In minutes
            status: false,
        }
    );
    const [isPark, setIsPark] = useState<boolean>(false);

    return(
        <ParkContext.Provider value={{ park, setPark, isPark, setIsPark }} >
            { children }
        </ParkContext.Provider>
    );
};