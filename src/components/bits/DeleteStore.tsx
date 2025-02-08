"use client"

import React, { useState } from 'react'
import { Card, CardDescription } from '../ui/card'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { deleteStore } from '@/actions/channel.action'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const DeleteStore = ({ storeId }: { storeid: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    const { toast } = useToast()
    const router = useRouter()

    const handleStoreDelete = async () => {
        const deleted = await deleteStore({ storeId })

        if (deleted === "failed") {
            toast({ title: "Could not delete this store", className: "border-l-4 border-l-red-500" })
        }

        else {
            toast({ title: "Successfully deleted the store", className: "border-l-4 border-l-green-500" })
            router.replace("/admin/channels")
        }
    }

    return (
        <>
            <Card className='w-full flex items-center justify-end mt-10 border-dashed border-red-500 border-2 bg-red-500/40'>
                <CardDescription className='p-3'>
                    <Button variant={"destructive"} className='font-semobold' onClick={() => setIsOpen(true)}>
                        Delete Store
                    </Button>
                </CardDescription>
            </Card>

            <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Store</DialogTitle>
                    </DialogHeader>
                    <DialogContent>
                        <h4 className='font-bold'>
                            Are you sure you want to delete this store?
                        </h4>
                        <DialogFooter className=''>
                            <Button className='text-sm py-1 font-bold px-5' variant={"default"} onClick={() => setIsOpen(false)}>
                                No
                            </Button>

                            <Button variant={'destructive'} className='text-sm py-1 font-bold px-5' onClick={handleStoreDelete}>
                                Yes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DeleteStore