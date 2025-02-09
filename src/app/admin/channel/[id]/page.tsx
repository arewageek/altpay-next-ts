import CopyToClipboard from '@/components/bits/CopyToClipboard'
import DeleteStore from '@/components/bits/DeleteStore'
import { UpdateChannelData } from '@/components/forms/UpdateChannelData'
import UpdateStoreDataForm from '@/components/forms/UpdateStoreDataForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

const Channel = ({ params }: { params: { id: string } }) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex text-xl font-bold items-center gap-5'>
                Application Id: #{params.id.substr(0, 4)}...{params.id.substr(-5)}
                <CopyToClipboard text={params.id} />
            </div>

            <UpdateChannelData channel={params.id} />

            <Card className='w-full mt-10'>

                <CardDescription className='p-3'>
                    Update store information
                </CardDescription>

                <UpdateStoreDataForm storeId={params.id} />
            </Card>

            <DeleteStore storeid={params.id} />

        </div>
    )
}

export default Channel