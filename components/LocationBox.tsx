import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
export default function LocationBox() {
  return (
    <div className="w-full flex justify-between items-center" >
            
            {/* Left Container */}
            <div className="flex items-center space-x-2" >
                <CiLocationOn className="text-2xl" />
                <div className="" >
                    <div className="text-xs text-[#E6CC48]" >Location</div>
                    <div className="text-sm font-semibold" >Vandalur, Chennai, India</div>
                </div>
            </div>

            {/* Right Container */}
            <div className="" >
                <MdNotificationsNone className="text-xl" />
            </div>

        </div>
  );
}
