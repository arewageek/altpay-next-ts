"use client"
import { useEffect, useState } from 'react'

type CountriesListType = [
    [{
        name: string,

    }]
]

const useCountriesApi = () => {
    const [countries, setCountries] = useState([])
    const API_URL = process.env.NEXT_PUBLIC_COUNTRIES_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


    let headers = new Headers();
    headers.append("X-CSCAPI-KEY", `${API_KEY}`);

    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: false
    }

    useEffect(() => {

        fetch(`${API_URL}`, requestOptions)
            .then(res => res.text())
            .then(result => console.log(result))
            .catch(error => console.log('error:', error))
    }, [])

    return { countries }
}

export default useCountriesApi