import React from 'react'
import './index.scss'
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';


export default function PageTitle({theme}) {
    return (
        <div className={`page-title ${theme}-theme`}>
            <div className='left'>
                <h2 className='title'>Shop</h2>
                <ul className='path'>
                    <li><AiOutlineHome /></li>
                    <li><MdOutlineArrowForwardIos className='arrow' /><span>ECommerce</span> </li>
                    <li><MdOutlineArrowForwardIos className='arrow' /><span className='active'>Shop</span></li>
                </ul>
            </div>
            <div className='right'>
                <button><FiSettings /></button>
            </div>
        </div>
    )
}
