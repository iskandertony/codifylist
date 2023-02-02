import React from 'react'
import './Search.scss'
const Search = ({ handle, value }) => {
    return (
        <div className="search">
            <div className="text">Вакансии</div>
            <input
                onChange={handle}
                value={value}
                type="text"
                className="input"
                placeholder="name your vacancies"
            />
        </div>
    )
}

export default Search
