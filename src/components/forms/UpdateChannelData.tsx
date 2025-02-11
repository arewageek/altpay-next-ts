"use client"

import { SyntheticEvent, useState } from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { jwtEncode } from '@/lib/jwt'
import { useToast } from '../ui/use-toast'

export const UpdateChannelData = ({ channel }: { channel: string }) => {

    const [shopifyToken, setShopifyToken] = useState('')
    const [squareAccessToken, setSquareAccessToken] = useState('')
    const [squareAppId, setSquareAppId] = useState('')
    const [squareLocationId, setSquareLocationId] = useState('')

    const { toast } = useToast()

    const handleChannelUpdate = async (event: SyntheticEvent) => {
        event.preventDefault()

        const jwtToken = jwtEncode({
            shopify_access_token: shopifyToken,
            square_access_token: squareAccessToken,
            square_application_id: squareAppId,
            square_location_id: squareLocationId,
        })

        console.log({ jwtToken })

        // const updateChannelTokens = await updateChannelData({
        //     token: jwtToken, storeId: channel
        // })

        // if (updateChannelTokens == "success") {
        //     toast({ title: "Tokens generated Successfully!", className: "border-l-4 border-l-green-500" })
        // }
        // else if (updateChannelTokens == "invalidStore") {
        //     toast({ title: "Invalid store provided!", className: "border-l-4 border-l-red-500" })
        // }
        // else {
        //     toast({ title: "Could Not Create Store!", className: "border-l-4 border-l-red-500" })
        // }
    }

    return (
        <Card className='w-full mt-10'>
            <form onSubmit={handleChannelUpdate}>

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
                                <Input onChange={(e: any) => setShopifyToken(e.target.value)} placeholder='Shopify Access Token' />
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
            </form>
        </Card>

    )
}
