import React from 'react'
import { RiBarChartLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { ImFilePdf } from 'react-icons/im';
import { IoImageOutline, IoSettingsOutline, IoHomeOutline } from 'react-icons/io5';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { PiHandCoins } from 'react-icons/pi';
import { RiMessage2Fill } from 'react-icons/ri';
import { LuLayoutDashboard } from 'react-icons/lu';

function Menu() {
  return (
    <div className='my-5 h-[500px] text-gray-500  mx-1 md:mx-0'>
        <div className='flex mb-5 mt-8'>
            <LuLayoutDashboard className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Dashboard</h1>
        </div>
        <div className='flex my-5'>
            <RiBarChartLine className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Objectives</h1>
        </div>
        <div className='flex my-5'>
            <MdOutlineShoppingCart className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Survey</h1>
        </div>
        <div className='flex my-5'>
            <ImFilePdf className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Documents</h1>
        </div>
        <div className='flex my-5'>
            <IoImageOutline className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Photos</h1>
        </div>
        <div className='flex my-5'>
            <IoMdHelpCircleOutline className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Hierachy</h1>
        </div>
        <div className='flex mt-8 mb-5'>
            <RiMessage2Fill className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Message</h1>
        </div>
        <div className='flex my-5'>
            <PiHandCoins className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Help</h1>
        </div>
        <div className='flex my-5'>
            <IoSettingsOutline className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Settings</h1>
        </div>
        <div className='flex mt-20'>
        <IoHomeOutline className='mt-1'/>
            <h1 className='mx-2 hidden md:block'>Logout</h1>
        </div>
    </div>
  )
}

export default Menu;