'use client'
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <div className="bg-[#1d1d1d] h-screen w-screen flex flex-col justify-between p-8" >
        {/* Top Container */}
        <div className="">
        </div>

        {/* Middle Container */}
        <div className="logo_text">
            ParkPilot
        </div>

        {/* Bottom Container */}
        <div className="w-full flex justify-center">
            <div className="p-4 rounded-md flex justify-center items-center space-x-6 border-[4px] border-[#e4c83a] w-fit cursor-pointer hover:bg-[#2d2d2d] transition-[0.4s] mb-10 " onClick={() => signIn('google')} >
                <FcGoogle className="text-3xl" />
                <div className="font-medium text-3xl text-[#e4c83a]" >Sign using Google</div>
            </div>
        </div>
    </div>
  )
}
