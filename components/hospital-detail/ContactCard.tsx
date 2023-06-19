import React from 'react'
import { TfiEmail } from 'react-icons/tfi';
import { MdPhone } from 'react-icons/md';
const ContactCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg drop-shadow shadow-xl p-4 mx-10">
        <h1 className='text-2xl font-bold my-2 mx-3'>Contact</h1>
        <div className='gap-14'>
            <h3 className='text-xl my-2 mx-3'>Reception</h3>
            <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg 
 drop-shadow-lg my-4">
                <MdPhone className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
                <p className="text-lg font-medium">+251-765-837</p>
            </div>
            <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg 
drop-shadow-md my-4">
                <MdPhone className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
                <p className="text-lg font-medium">+251-765-837</p>
            </div>
        </div>
        <div className='my-2'>
            <h3 className='text-xl my-2'>Email</h3>
            <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg 
drop-shadow-md">
                <TfiEmail className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
                <p className="text-lg font-medium">+251-765-837</p>
            </div>
        </div>
        <div className='my-2'>
            <h3 className='text-xl my-2'>Web</h3>
            <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg 
drop-shadow-md">
                <MdPhone className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
                <p className="text-lg font-medium">+251-765-837</p>
            </div>
        </div>
    </div>
  )
}

export default ContactCard