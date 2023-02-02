import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './List.scss'
import ListContainer from '../../Components/ListContainer/ListContainer'
const List = () => {
    const [api, setApi] = useState([])
    const [loading, setLoading] = useState(false)
    const baseURL = 'https://lets.codifylab.com/apis/vacancies/'

    async function getApi() {
        setLoading(true)
        try {
            const response = await axios.get(baseURL)
            setApi(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <div>
            {api.map((item, index, id) => (
                <ListContainer data={item} />
            ))}
        </div>
    )
}

export default List
