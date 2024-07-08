import SideNav from '@/components/layouts/SideNav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Copy } from 'lucide-react'
import React from 'react'

const Channel = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <div className='flex text-xl font-bold items-center gap-5'>
                Application Id: #{params.id}
                <Button className='py-1' variant={'secondary'}>
                    <Copy size={20} />
                </Button>
            </div>

            <Card className='w-full mt-10'>

                <CardDescription className='p-3'>
                    Generate Access Token For Application
                </CardDescription>

                <div className='flex'>
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

                <div className='flex'>
                    <div className='w-full lg:w-1/2 p-3 min-h-full'>
                        <Card className='py-5 h-full'>
                            <CardTitle className='text-xl px-6'>
                                Shopify Store
                            </CardTitle>
                            <CardContent className='py-10 grid gap-3'>
                                <Input placeholder='Store Name' />
                                <Input placeholder='Store Url' />
                                <Input placeholder='Store Currency' />
                                <Input placeholder='Store Country' />
                            </CardContent>
                        </Card>
                    </div>

                    <div className='w-full lg:w-1/2 p-3'>
                        <Card className='py-5 h-full'>
                            <CardTitle className='text-xl px-6 min-sh-full'>
                                Square Checkout
                            </CardTitle>
                            <CardContent className='py-10 grid gap-3'>
                                <Input placeholder='Currency' />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='p-3'>
                    <Button>
                        Save Changes
                    </Button>
                </div>
            </Card>

        </div>
    )
}

export default Channel