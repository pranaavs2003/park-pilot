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

    return(
        <UserContext.Provider value={{ user, setUser }} >
            { children }
        </UserContext.Provider>
    );
};