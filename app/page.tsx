'use client'
import { useSession } from "next-auth/react";
import LocationBox from "../components/LocationBox";
import HeaderBox from "../components/HeaderBox";
import RecentSlider from "../components/RecentSlider";
import UserForm from "../components/UserForm";
import { CiParking1 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/UserContextProvider";
import { useRouter } from "next/navigation";

export default function page() {    
    const session = useSession();
    const router = useRouter();
    const [isReg, setIsReg] = useState(false);
    const { user, isRegistered } = useContext(UserContext);
    //console.log(user);

    useEffect(() => {
        
        const checkUser = async () => {
            const res = await axios.get(`http://localhost:3001/user/checkuser/${session?.data?.user?.email}`);
            return res?.data?.status;
        };

        const setUser = async () => {
            const isUser = await checkUser();
            setIsReg(isUser);
        };
        setUser();

    }, []);

    const park = async () => {
        const notification = toast.loading('Processing...');
        const res = await axios.get('http://127.0.0.1:8000/detect');
        console.log("👍" ,res);
        toast.success('Success 👍', {
            id: notification
        });
        router.replace('/park');
    };

    const formatUsername = (username : string) : string => {
        username = username.charAt(0).toUpperCase() + username.slice(1);
        return username;
    }; 

  return (
    <div className="h-[92vh] w-full flex flex-col bg-[#1d1d1d] p-4 pt-5" >
        { 
        (isReg)
        ?
        <>
            {/* Location box */}
            <LocationBox />

            {/* Header Box */}
            <HeaderBox />

            {/* Park Box */}
            <div className="flex space-x-3 mt-48" >

                {/* Balance Widget */}
                <div className="h-28 w-2/5 p-3 bg-[#7b7b7b7e] rounded-md" >
                    <div className="font-bold pb-4" >Your Balance</div>
                    <div className="flex items-start space-x-1" >
                        <div className="text-[#E6CC48]" >₹</div>
                        <div className="font-bold text-3xl text-[#E6CC48]" >{ user?.balance }.00</div>
                    </div>
                </div>
                
                {/* Buttons */}
                <div className="w-3/5 flex flex-col space-y-5" >

                    {/* Park Button */}
                    <div className="flex justify-center items-center rounded-md space-x-2 border-[2px] bg-[#6d6d6d76] border-[#E6CC48] p-2 text-[#E6CC48] cursor-pointer" onClick={() => park()} >
                        <CiParking1 className="text-2xl" />
                        <div className="font-bold " >Park!</div>
                    </div>

                    {/* Cancel Button */}
                    <div className="flex justify-center items-center rounded-md space-x-2 border-[2px] border-[#b1b1b1] p-2 text-[#cb5632] bg-[#6d6d6d76] cursor-pointer" >
                        <MdOutlineCancel className="text-2xl" />
                        <div className="" >Cancel</div>
                    </div>
                
                </div>
            
            </div>

            {/* Recent Slider */}
            <RecentSlider />
        </>
            :
            <>
                <UserForm />
            </>
        }
    </div>
  )
}
