'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { RxHamburgerMenu } from "react-icons/rx"
export default function Topbar() {
  const session = useSession();
  //console.log(session);
  return (
    <div className="w-full h-[8vh] bg-[#1d1d1d] flex justify-between items-center pl-5 pr-5 pt-4" >
        
        {/* Left container */}
        <div className="logo_text text-3xl small_text_shadow" >ParkPilot</div>
        
        {/* Right Container */}
        <div className="" onClick={() => signOut()} >
          <img src={session?.data?.user?.image!} alt="profile-pic" className="h-9 rounded-full border-[2px] border-[#e4c83a] cursor-pointer" />
        </div>
        
    </div>
  )
}

// {/* Left Container */}
// <div className="" >
// <RxHamburgerMenu className="text-[#e4c83a] text-xl cursor-pointer" />
// </div>

// {/* Right Container */}
// <div className="logo_text text-3xl small_text_shadow" >ParkPilot</div>

// {/* Left Container       */}
// <div className="" onClick={() => signOut()} >
// <img src={session?.data?.user?.image!} alt="profile-pic" className="h-9 rounded-full border-[2px] border-[#e4c83a] cursor-pointer" />
// </div>