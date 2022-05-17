import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import './index.scss'

export default function Rating({num}){
    
    const[stars, setStars]= useState(Array(5).fill(""))

    {/* Rating component accept number <= 5 to handle showing rating */}

    return (
        <div className="rating">{stars.map((_,i) => 
            i < 5 ? 
                <span key={i} >
                    {i< num ? <AiFillStar className='full' /> : <AiOutlineStar className='empty' />}
                </span> 
            : "" )}
        </div>
    )
}
