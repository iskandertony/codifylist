import React from 'react'
import { Link } from 'react-router-dom'

import './ListContainer.scss'
import Button from '../Button/button'
import Cvteg from '../CVTeg/cvteg'
import Cvtegbig from '../CVTeg/CVTegbig'
import ListDescription from '../Card Mid/list-description'
import ListFooter from '../Card Footer/list-footer'
const ListContainer = ({ data }) => {
    const {
        salary_from,
        salary_to,
        skills,
        name,
        experience,
        types,
        level,
        company,
        created_date,
        logo,
        response_count,
        id,
    } = data
    return (
        <div className="list_container">
            <div className="list_container_gradient"></div>

            <div className="list_container_header">
                <div className="list_container_name">{name}</div>
                <Link to="/form" className="underline">
                    <Button text="отликнуться" />
                </Link>
            </div>

            <div>
                <div className="list_container_description">
                    <Cvtegbig from={salary_from} to={salary_to} />
                </div>
                <ListDescription types={types} experience={experience} level={level.name} />
                <div className="cvteg_content">
                    {skills.slice(0, 3).map((item, index) => (
                        <Cvteg text={item.name} />
                    ))}
                    {skills.length > 3 && <Cvteg text={`+ ${skills.length - 3}`} />}
                </div>

                <div className="cvteg_content-mobile">
                    {skills.slice(0, 1).map((item, index) => (
                        <Cvteg text={item.name} />
                    ))}
                    {skills.length > 1 && <Cvteg text={`+ ${skills.length - 1}`} />}
                </div>
            </div>

            <div>
                <ListFooter
                    response_count={response_count}
                    company={company.name}
                    created_date={created_date}
                    logo={company.logo}
                />
            </div>
        </div>
    )
}

export default ListContainer
