import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [mobile, setMobile] = useState(true);

    const handleClick = () => {
        if (mobile) {
            setMobile(false)
        }
        else {
            setMobile(true)
        }
    }



    return (
        <div>
            <nav className="flex justify-between ">
                <div className="">
                    <Image
                        src="/favicon.ico"
                        width={80}
                        height={80} />
                </div>

                <div className='flex justify-between w-6/12 items-center'>
                    <Link className='sm:mt-0 mt-3' href="/">Home</Link>
                    <Link className='sm:mt-0 mt-3' href="/about">About</Link>
                    <Link className='sm:mt-0 mt-3' href="/contact">Contact</Link>
                    <div className={`${mobile ? "opacity-100 w-8 cursor-pointer absolute top-0 right-0" : "opacity-0 h-0"} sm:hidden block`} onClick={handleClick}>x</div>
                </div>
            </nav>
        </div>
    )
}
