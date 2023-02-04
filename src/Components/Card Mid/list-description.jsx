import React from 'react'
import { ReactComponent as Trending } from '../../imgs/trending-up.svg'
import { ReactComponent as Zoom } from '../../imgs/zoom-in.svg'
import { ReactComponent as Briefcase } from '../../imgs/briefcase.svg'
import './list-description.scss'
const ListDescription = ({ experience, level, types }) => {
    const stringTypes = types.map((t) => t.name).join(', ')

    return (
        <div className="list_container_description_content">
            <div className="list_container_description_item">
                <Trending />
                <div className="list_container_description_text">{level}</div>
            </div>
            <div className="list_container_description_item">
                <Briefcase />
                <div className="list_container_description_text">{experience}</div>
            </div>
            <div className="list_container_description_item">
                <Zoom />
                <div className="list_container_description_sub">
                    <div className="list_container_description_text"> {stringTypes}</div>
                </div>
            </div>
        </div>
    )
}

export default ListDescription
