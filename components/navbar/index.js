import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [Menu, setMenu] = useState(false);

    const handleClick = () => {
        if (Menu) {
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }



    return (
        <div>
            <nav className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <Image
                        src="/favicon.ico"
                        width={70}
                        height={70} />
                </div>

                <div className={Menu ? "mobileMenu transition-all w-screen h-screen fixed top-0 right-0  flex justify-center items-center flex-col "
                    : "transition-all p-2 border-2 sm:h-fit sm:static sm:block hidden opacity-0 "}>
                    <Link passHref href="/"><a className='sm:mt-0 mt-2 text-lg p-2 text-black'>Home</a></Link>
                    <Link passHref href="/about"><a className='sm:mt-0 mt-2 text-lg p-2 text-black'>About</a></Link>
                    <Link passHref href="/contact"><a className='sm:mt-0 mt-2 text-lg p-2 text-black'>Contact</a></Link>
                </div>
                
                <h3 className={`${Menu ? "animations sm:mt-0 mt-2 text-lg " : "animation" } sm:hidden block`} onClick={handleClick}>{Menu ? "x" : "="}</h3>
            </nav>
        </div>
    )
}
