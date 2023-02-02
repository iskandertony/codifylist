import React from 'react'
import './Search.scss'
const Search = ({ value }) => {
    return (
        <div className="search">
            <div className="text">Вакансии</div>
            <input value={value} type="text" className="input" placeholder="name your vacancies" />
        </div>
    )
}

export default Search
