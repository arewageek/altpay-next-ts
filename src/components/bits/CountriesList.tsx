'use client'


import { Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select'
import useCountriesApi from '@/hooks/useCountriesApi'

const CountriesList = () => {

    const { countries } = useCountriesApi()

    return (
        <div className='z-50'>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder='Select Country' />
                </SelectTrigger>
                <SelectContent className='bg-white w-full'>
                    <SelectItem value='Nigeria'>Nigeria</SelectItem>
                    <SelectItem value='United'>United</SelectItem>
                    <SelectItem value='Niger'>Niger</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default CountriesList