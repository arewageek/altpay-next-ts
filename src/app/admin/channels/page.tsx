import { storesList } from '@/actions/project.action'
import EachProjectCard from '@/components/bits/EachProjectCard'
import SideNav from '@/components/layouts/SideNav'
import React from 'react'

const ChannelsPage = async () => {
    const stores = await storesList()

    console.log({ stores })

    return (
        <div className='grid grid-cols-1 md:grid-cols-4'>
            {stores?.map((store) => <EachProjectCard key={store.id} name={store.name} url={store.url} id={store.id} />)}
            <EachProjectCard type="create" />
        </div>
    )
}

export default ChannelsPage