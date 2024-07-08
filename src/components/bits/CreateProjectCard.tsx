"use client"
import Modal from '../Modal'
import { Card } from '../ui/card'
import { ReactHTML, SyntheticEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Rocket } from 'lucide-react'
import { createProject } from '@/actions/project.action'
import { useToast } from '../ui/use-toast'

const CreateProjectCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [projectTitle, setProjectTitle] = useState<string | undefined>()

    const { toast } = useToast()

    const createProjectModal = () => {
        setIsModalOpen(true)
    }

    const updateIsOpenState = () => {
        setIsModalOpen(false)
    }

    const newproject = async (e: SyntheticEvent) => {
        e.preventDefault()

        const created = await createProject({ projectTitle })
        console.log(created)

        if (created == "success") {
            toast({ title: "Store Created Successfully!", className: "border-l-8 border-l-green-500" })
        }
        else if (created == "invalidStoreName") {
            toast({ title: "Invlid Store Name!", className: "border-l-8 border-l-red-500" })
        }
        else {
            toast({ title: "Could Not Create Store!", className: "border-l-8 border-l-red-500" })
        }
    }

    return (
        <>
            <Card onClick={createProjectModal} className='p-3 transition h-full min-h-[70pt] cursor-pointer flex items-center justify-center border-dashed border-4 border-gray-600 hover:border-blue-600 hover:text-blue-600 hover:scale-90'>
                <div className='font-bold text-3xl'>
                    +
                </div>
            </Card>

            <Modal title='Heading' isOpen={isModalOpen} updateIsOpenState={updateIsOpenState}>
                <form onSubmit={newproject} className='flex flex-col gap-y-3'>
                    <Label className='font-semibold text-md'>
                        Project Title
                    </Label>
                    <div className='flex'>
                        <Input onChange={(e) => setProjectTitle(e.target.value)} type='text' placeholder='Store Name...' className='border-2 rounded-r-none focus-within:ring-0 focus-visible:ring-0' />
                        <Button type='submit' className='text-lg px-8 rounded-l-none'>
                            <Rocket />
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default CreateProjectCard