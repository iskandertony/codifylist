import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './List.scss'
import ListContainer from '../../Components/Card/ListContainer'
import { useDebouncedCallback } from 'use-debounce'
import Search from '../../Components/Search/Search'
const List = () => {
    const [api, setApi] = useState([])
    const [filtered, setFiltered] = useState([])
    const [seacrh, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const baseURL = 'https://lets.codifylab.com/apis/vacancies/'

    async function getApi() {
        setLoading(true)
        try {
            const response = await axios.get(baseURL)
            setApi(response.data)
            return response.data
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = useDebouncedCallback((e) => {
        setFiltered(api.filter((item) => item.name.toLowerCase().includes(e.target.value)))
    }, 1000)

    useEffect(() => {
        getApi().then((result) => setFiltered(result))
    }, [])

    return (
        <div>
            <Search handle={handleSearch} />
            {filtered.map((item, index, id) => (
                <div key={item.id}>
                    <ListContainer data={item} />
                </div>
            ))}
        </div>
    )
}

export default List
