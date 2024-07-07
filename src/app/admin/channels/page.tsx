import EachProjectCard from '@/components/bits/EachProjectCard'
import SideNav from '@/components/layouts/SideNav'
import React from 'react'

const ChannelsPage = () => {
    return (
        <main className='w-full h-full px-0 lg:px-10 bg-gray-100 flex flex-col md:flex-row py-20'>
            <SideNav />
            <div className='w-full rounded-3xl bg-white p-10 '>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    {[...Array(10)].map((element, index) => <EachProjectCard key={index} />)}
                </div>
            </div>
        </main>
    )
}

export default ChannelsPage