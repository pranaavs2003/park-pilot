'use client'
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import axios from "axios";

type Props = {
    childern: React.ReactNode;
    session: Session | null;
};

export default function SessionProvider({children, session} : Props) {
  const { user, setUser } = useContext(UserContext);

  useEffect( () => {
    const checkUser = async () => {
      const res = await axios.get(`http://localhost:3001/user/checkuser/${session?.user?.email}`);
      return res?.data?.status;
    };

    const getUser = async () => {
      if(session?.user?.email){
        const isUser = await checkUser();
        if(isUser){
          const res = await axios.get(`http://localhost:3001/user/getuserbyemail/${session?.user?.email}`);
          const data = {
            email: res?.data?.email,
            numberPlate: res?.data?.numberplate,
            phoneNumber: res?.data?.phonenumber,
            balance: res?.data?.balance,
            username: res?.data?.username 
          };
          setUser(data);
        }
      }
    };

    getUser();

  }, [session]);

  // useEffect(() => {
  //   console.log("👍" ,user);
  // }, [user]);

  return (
    <Provider session={session}>
        {children}
    </Provider>
  )
}