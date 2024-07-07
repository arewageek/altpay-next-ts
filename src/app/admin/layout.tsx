import SideNav from '@/components/layouts/SideNav'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' bg-gray-100 flex gap-4 py-10 pr-10 pl-6'>
            <SideNav />
            <div className='px-10 py-5 rounded-xl bg-white w-full gap-y-10 p-5'>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout