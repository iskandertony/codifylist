import React from 'react'
import { ReactComponent as Logo } from '../../imgs/Logo.svg'
import { ReactComponent as Icon } from '../../imgs/Icon.svg'
import { ReactComponent as Share } from '../../imgs/share-2.svg'
import './list-footer.scss'
const ListFooter = ({ company, created_date, logo, response_count }) => {
    return (
        <div className="list_container_footer">
            <div className="list_container_item">
                <img src={logo} alt="" className="list_container_footer_img" />
                <div className="list_container_footer_name">{company} </div>
                <div className="list_container_space">|</div>
                <div>{created_date}</div>
            </div>

            <div className="list_container_item">
                <Icon />
                <div className="list_container_footer_text">
                    Откликов:{' '}
                    <span className="list_container_footer_response">{response_count}</span>{' '}
                </div>
                <Share />
            </div>
        </div>
    )
}

export default ListFooter
