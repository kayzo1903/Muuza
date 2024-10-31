import { Link } from '@/i18n/routing';
import React from 'react'
import { IoLocation } from "react-icons/io5";

function Addlocation() {
  return (
    <div className='px-4 flex gap-2 items-center pb-4'>
        <IoLocation className='text-3xl text-skin'/>
        <Link href={"/location"} className='text-sm font-thin'>Add your location for better experience</Link>
    </div>
  )
}

export default Addlocation