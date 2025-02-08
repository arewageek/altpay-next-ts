"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getInitialStoreData, updateStoreData } from '@/actions/channel.action'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../ui/form'
import { useToast } from '../ui/use-toast'


interface DataType {
    storeId: string,
    name: string,
    url: string | null,
    country: string | null,
    shopifyCurrency: string | null,
    squareCurrency: string | null,
}

const FormSchema = z.object({
    name: z.string(),
    url: z.string().url({ message: "Invalid url" }),
    country: z.string(),
    shopifyCurrency: z.string(),
    squareCurrency: z.string()
})

type InputType = z.infer<typeof FormSchema>

const UpdateStoreDataForm = ({ storeId }: { storeId: string }) => {
    const [data, setData] = useState<DataType>()

    // const { register, formState: { errors, isLoading, isSubmitting }, handleSubmit } = useForm<InputType>({ resolver: zodResolver(FormSchema) })
    const form = useForm<InputType>({ resolver: zodResolver(FormSchema) })

    const { toast } = useToast()

    useEffect(() => {
        const data = async () => {
            const initialStoreData = await getInitialStoreData({ storeId })

            console.log(initialStoreData)

            setData(initialStoreData)
        }
        data()
    }, [])


    const handleStoreUpdate: SubmitHandler<InputType> = async (data) => {
        const updateStore = await updateStoreData({ data, storeId })

        if (updateStore === "invalidStore") {
            toast({ title: "Invalid store selected", className: "border-l-4 border-l-red-500" })
        }

        if (updateStore === "unknownError") {
            toast({ title: "An unknown error occurred", className: "border-l-4 border-l-red-500" })
        }

        else { toast({ title: "Successfully updated store", className: "border-l-4 border-l-green-500" }) }
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleStoreUpdate)}>

                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 p-3 min-h-full'>
                        <Card className='py-5 h-full'>
                            <CardTitle className='text-xl px-6'>
                                Shopify Store
                            </CardTitle>
                            <CardContent className='py-10 grid gap-3'>
                                <FormField name={"name"} control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Store Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder='Store Name' defaultValue={data?.name!} {...field} />
                                            </FormControl>
                                            <FormDescription className='text-red-500 italic text-sm'>
                                                {!!form.formState.errors && form.formState.errors.name?.message}
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />


                                <FormField name={"url"} control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Store URL
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder='Store Url' defaultValue={data?.url!} {...field} />
                                            </FormControl>
                                            <FormDescription className='text-red-500 italic text-sm'>
                                                {form.formState.errors.url && form.formState.errors.url?.message}
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />

                                <FormField name={"shopifyCurrency"} control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Store Currency
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder='Store Currency' defaultValue={data?.shopifyCurrency!} {...field} />
                                            </FormControl>
                                            <FormDescription className='text-red-500 italic text-sm'>
                                                {form.formState.errors.shopifyCurrency && form.formState.errors.shopifyCurrency?.message}
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />

                                <FormField name={"country"} control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Store Country
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder='Store Country' defaultValue={data?.country!} {...field} />
                                            </FormControl>
                                            <FormDescription className='text-red-500 italic text-sm'>
                                                {!!form.formState.errors.country && form.formState.errors.country?.message}
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />


                            </CardContent>
                        </Card>
                    </div>

                    <div className='w-full lg:w-1/2 p-3'>
                        <Card className='py-5 h-full'>
                            <CardTitle className='text-xl px-6 min-sh-full'>
                                Square Checkout
                            </CardTitle>
                            <CardContent className='py-10 grid gap-3'>
                                <FormField name={"squareCurrency"} control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Square Currency
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="text" defaultValue={data?.squareCurrency!} placeholder='Currency' {...field} />
                                            </FormControl>
                                            <FormDescription className='text-red-500 italic text-sm'>
                                                {!!form.formState.errors.squareCurrency && form.formState.errors.squareCurrency?.message}
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />

                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='p-3'>
                    <Button type='submit'>
                        Save Changes
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default UpdateStoreDataForm