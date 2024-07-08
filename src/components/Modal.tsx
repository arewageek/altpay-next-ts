import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"


interface ModalTypes {
    children: ReactNode,
    title: string,
    isOpen: boolean,
    description?: string
    updateIsOpenState: () => void
}

const Modal = ({ children, title, isOpen, description, updateIsOpenState }: ModalTypes) => {
    const updateIsOpenChange = () => {
        updateIsOpenState()
    }

    return (
        <Dialog open={isOpen} onOpenChange={updateIsOpenChange}>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    <DialogContent>
                        {children}
                    </DialogContent>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default Modal