'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { UserContext } from './UserContextProvider';
import axios from 'axios';

export default function UserForm() {
    const session = useSession();
    const { setIsRegistered } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [plate, setPlate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // const printData = () => {
    //     console.log(username);
    //     console.log(plate);
    //     console.log(phoneNumber);
    // };

    const addUser = async () => {
        try {
          const { email } = session?.data?.user || {};
          const data = {
            email,
            numberplate: plate,
            username,
            phonenumber: phoneNumber,
            balance: 600,
          };
          console.log(data);
          const res = await axios.post("http://localhost:3001/adduserinfo", data);
          setIsRegistered(true);
        } catch (error) {
          console.error(error);
          // Handle the error here.
        }
      };

  return (
    <div>
        {/* Title */}
        <div className='title_text mt-10' >Enter your Details</div>

        {/* User Form */}
        <div className='flex flex-col space-y-5 mt-10' >

            {/* Form Item */}
            <div className='flex flex-col space-y-1' >
                <div className='form_title' >Username</div>
                <input type="text" className='form_box' onChange={(e) => setUsername(e.target.value)} />
            </div>

            {/* Form Item */}
            <div className='flex flex-col space-y-1' >
                <div className='form_title' >Phone Number</div>
                <input type="text" className='form_box' onChange={(e) => setPlate(e.target.value)} />
            </div>

            {/* Form Item */}
            <div className='flex flex-col space-y-1' >
                <div className='form_title' >Car Registration Number</div>
                <input type="text" className='form_box' onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

        </div>

        {/* Form Submit Button */}
        <div className='text-2xl font-bold text-[#E6CC48] text-center mt-10 p-2 cursor-pointer border-[2px] border-[#E6CC48] rounded-sm' onClick={() => addUser()} >
            Submit
        </div>

    </div>
  )
}
