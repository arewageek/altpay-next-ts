import CopyToClipboard from '@/components/bits/CopyToClipboard'
import DeleteStore from '@/components/bits/DeleteStore'
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

            <Card className='w-full mt-10'>

                <CardDescription className='p-3'>
                    Generate Access Token For Application
                </CardDescription>

                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 p-3 min-h-full'>
                        <Card className='py-5 h-full'>
                            <CardTitle className='text-xl px-6'>
                                Shopify Integration
                            </CardTitle>
                            <CardContent className='py-10'>
                                <Input placeholder='Shopify Access Token' />
                            </CardContent>
                        </Card>
                    </div>

                    <div className='w-full lg:w-1/2 p-3'>
                        <Card className='py-5'>
                            <CardTitle className='text-xl px-6 min-sh-full'>
                                Square Integration
                            </CardTitle>
                            <CardContent className='py-10 grid gap-3'>
                                <Input placeholder='Shopify Access Token' />
                                <Input placeholder='Shopify Ac' />
                                <Input placeholder='Shopify Access Token' />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='p-3'>
                    <Button>
                        Validate Token
                    </Button>
                </div>
            </Card>


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