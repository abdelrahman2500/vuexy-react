import React, { useState } from 'react'
import './index.scss'
import Rating from './../rating/Rating';
import {AiOutlineShoppingCart, AiOutlineHeart , AiFillHeart} from 'react-icons/ai'

export default function Product({product, showMode, theme}) {
    const [color, setColor] = useState("")
    return (
        <div className={`product ${theme}-theme`}>
        {showMode == "menu-mode" ?

            <div className='menu-mode'>
                <div className='product-img'>
                    <img src={product.img} />
                </div>
                <div className='product-details'>
                    <div className='rating-and-price'>
                        <div className='product-rating'>
                            <Rating num={product.rating} />
                        </div>
                        <div className='product-price'>
                            <h6>${product.price}</h6> 
                        </div>
                    </div>
                    <div className='name-and-description'>
                        <h6 className='name'>
                            {product.name}
                        </h6>
                        <p className='desc'>
                            {product.discription}
                        </p>
                    </div>
                </div>
                <div className='product-actions'>
                    <button className='wish' onClick={() => setColor(color =="" ? "red" : "")}>{!color ? <AiOutlineHeart /> : <AiFillHeart color={"red"} />}Wishlist</button>
                    <button className='add'><AiOutlineShoppingCart /> View In Cart</button>
                </div>
            </div>
        :
        
            <div className='list-mode'>
                <div className='product-img'>
                    <img src={product.img} />
                </div>
                <div className='product-details'>
                    <h6 className='name'>
                        {product.name}
                    </h6>
                    <p className='product-brand'>
                        by <span>{product.brand}</span>
                    </p>
                    <div className='product-rating'>
                        <Rating num={product.rating} />
                    </div>
                    <p className='desc'>
                        {product.discription}
                    </p>
                </div>
                <div className='product-actions'>
                    <div className='product-price'>
                        <h4>${product.price}</h4> 
                    </div>
                    <button className='wish' onClick={() => setColor(color =="" ? "red" : "")}>{!color ? <AiOutlineHeart /> : <AiFillHeart color={"red"} />}Wishlist</button>
                    <button className='add'><AiOutlineShoppingCart /> View In Cart</button>
                </div>
            </div>
        }
        </div>
    )
}
