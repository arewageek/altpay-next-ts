"use client"

import { useEffect, useState } from "react"
import EachProjectCard from "./EachProjectCard"
import { storesList } from "@/actions/channel.action"

const AllProjects = () => {
    const [projects, setProjects] = useState<{ id: string, storeId: string, name: string, url: string, token: string, country: string, shopifyCurrency: string, squareCurrency: string }[]>()

    useEffect(() => {

        const fetchProjects = async () => {
            const stores = await storesList()
            setProjects(stores)
        }

        fetchProjects()
    }, [stores])

    return (
        <div className='grid grid-cols-1 md:grid-cols-4'>
            {projects?.map((store) => <EachProjectCard key={store.id} name={store.name} url={store.url} id={store.storeId} />)}
            <EachProjectCard type="create" />
        </div>
    )
}

export default AllProjects