"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Copy } from 'lucide-react'
import { useToast } from '../ui/use-toast'

const CopyToClipboard = ({ text }: { text: string }) => {

    const { toast } = useToast()

    const handleCopy = async () => {
        try {
            await window.navigator.clipboard.writeText(text)
            console.log("done", text)
            toast({ title: "Store ID copied to clipboard", className: "border-l-4 border-l-green-400" })
        }
        catch (e) {
            toast({ title: "Could not copy text to clipboard", className: "border-l-4 border-l-red-400" })
        }
    }

    return (
        <Button onClick={handleCopy} className='py-1' variant={'secondary'}>
            <Copy size={20} />
        </Button>
    )
}

export default CopyToClipboard