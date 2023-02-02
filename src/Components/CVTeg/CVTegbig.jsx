import React from 'react'
import { ReactComponent as Coin } from '../../imgs/Coin.svg'
import './CVTegbig.scss'
const Cvtegbig = ({ from, to }) => {
    return (
        <div className="cvtegbig">
            <div className="cvtegbig_coin">
                <Coin />
            </div>
            <div className="cvtegbig_text">от</div>
            <div className="cvtegbig_text"> {from} kgs</div>
            {to && (
                <>
                    <div className="cvtegbig_text">{'до'}</div>
                    <div className="cvtegbig_text">{` ${to} kgs`}</div>
                </>
            )}
        </div>
    )
}

export default Cvtegbig
