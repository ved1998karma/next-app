import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoGithub, } from 'react-icons/io'

export default function Footer() {
  return (
    <>
      <div className=' p-24 bg-slate-600'>
        <div className='flex  justify-between  text-white'>
          <ul className='text-lg'>
            Popular Features
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
          </ul>
          <ul className='text-lg'>
            Free Tools
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
          </ul>
          <ul className='text-lg'>
            Company
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
          </ul>
          <ul className='text-lg'>
            Company
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
            <li className='text-sm mt-3'>Free Meeting Scheduler App</li>
          </ul>
        </div>

        <div className='flex items-center my-20'>
          <span className='w-full h-1 bg-slate-500 rounded'></span>
          <ul className='flex w-fit justify-center'>
            <li className='w-8 mx-3'> <IoLogoFacebook className='h-10 w-10 text-slate-800' /> </li>
            <li className='w-8 mx-3'> <IoLogoTwitter className='h-10 w-10 text-slate-800' /> </li>
            <li className='w-8 mx-3'> <IoLogoLinkedin className='h-10 w-10 text-slate-800' /> </li>
            <li className='w-8 mx-3'> <IoLogoGithub className='h-10 w-10 text-slate-800' /> </li>
          </ul>
          <span className='w-full h-1 bg-slate-500 rounded'></span>
        </div>

        <h4 className='text-white text-center font-extralight font-'>DEMO FOOTER</h4>
      </div>
    </>
  )
}

