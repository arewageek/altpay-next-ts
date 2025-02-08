import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    const links = [
        { label: "Channels", path: "/admin/channels" },
        { label: "Profile", path: "/" },
        { label: "Settings", path: "/" }
    ]

    return (
        <div className='w-[250px] h-full py-10 flex flex-col gap-y-4'>
            <div className='font-extrabold text-xl px-7'>
                Alt Pay
            </div>

            <div className='flex gap-y-3 flex-col mt-4 w-full'>
                {links.map((link) => (
                    <Link key={link.label} href={link.path} className='text-lg font-medium py-3 w-full lg:rounded-l-full hover:bg-white hover:font-semibold px-7'>{link.label}</Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav