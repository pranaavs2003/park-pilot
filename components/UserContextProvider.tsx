'use client'
import React, { Dispatch, SetStateAction, useState, createContext } from "react";

interface UserDataProps {
    email: string;
    numberPlate: string;
    phoneNumber: string;
    balance: number;
    username: string;
};

interface UserContextProps {
    user: UserDataProps;
    setUser: Dispatch<SetStateAction<UserDataProps>>;
    isRegistered: boolean;
    setIsRegistered: Dispatch<SetStateAction<boolean>>;
};

interface UserContextProviderProps{
    children: React.ReactNode;
};

export const UserContext = createContext<UserContextProps>({
    user: {
        email: "",
        numberPlate: "",
        phoneNumber: "",
        balance: 0,
        username: ""
    },
    setUser: () => {},
    isRegistered: false,
    setIsRegistered: () => {},
});

export default function UserContextProvider({ children } : UserContextProviderProps) {
    const [user, setUser] = useState<UserDataProps>(
        {
            email: "",
            numberPlate: "",
            phoneNumber: "",
            balance: 0,
            username: ""
        }
    );
    const [isRegistered, setIsRegistered] = useState<boolean>(false);

    return(
        <UserContext.Provider value={{ user, setUser, isRegistered, setIsRegistered }} >
            { children }
        </UserContext.Provider>
    );
};