import React from 'react'
import { BsPersonFill } from 'react-icons/bs';

function Navbar() {
  return (
    <div className='my-3'>
        <BsPersonFill className='rounded-full border text-blue-900 text-2xl md:text-3xl ' />
        <h1 className='font-semibold hidden my-2 md:block'>Hello, Frank!</h1>
    </div>
  )
}

export default Navbar;