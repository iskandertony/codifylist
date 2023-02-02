import React from 'react'
import List from './List/List'
import './Home.scss'
import Search from '../Components/Search/Search'
const Home = () => {
    return (
        <div>
            <Search />
            <div className="list">
                <List />
            </div>
        </div>
    )
}

export default Home
