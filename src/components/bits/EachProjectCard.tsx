import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'

const EachProjectCard = () => {
    return (
        <div className='p-2'>
            <Card className='p-3 hover:bg-gray-50 transition'>
                <CardTitle className='grid gap-y-2'>
                    Project Title
                    <CardDescription>
                        <Link href="" className='underline text-blue-600/50'>
                            Link to application
                        </Link>
                    </CardDescription>
                </CardTitle>
                <CardContent className='flex items-end justify-end py-0 pt-7 pr-0'>
                    <div className=''>
                        <Link className='px-4 py-1' href="/admin/channel/id">
                            View
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EachProjectCard