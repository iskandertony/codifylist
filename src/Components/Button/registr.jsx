import React from 'react'
import './registr.scss'
const Registr = ({ text, onclick }) => {
    return (
        <button className="button_registr" onClick={onclick}>
            {text}
        </button>
    )
}

export default Registr
