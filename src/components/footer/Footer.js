import React from 'react'
import './index.scss'
import { AiOutlineHeart} from 'react-icons/ai'

export default function Footer({theme}) {
    return (
        <div className={`footer ${theme}-theme`}>
            <p className='left'>
                COPYRIGHT © 2022 <span className='copyright'>Algoriza</span>, <span className='reserved'>All rights Reserved</span> 
            </p>
            <p className='right'>
                Hand-crafted & Made with <AiOutlineHeart />
            </p>
        </div>
    )
}
