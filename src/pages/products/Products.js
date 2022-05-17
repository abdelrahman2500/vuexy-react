import React, { useEffect, useState } from 'react'
import Pagination from '../../components/pagination/Pagination'
import Product from '../../components/product/Product'
import './index.scss'

export default function Products({filterdProducts, showMode, theme}) {
    const[page,setPage] = useState(1)
    const[itemsNumberInPage,setItemsNumberInPage] = useState(9)

    useEffect(() => {
        setPage(1)
    },[filterdProducts])
    return (
        <>
        <div className={`product-page ${showMode}`}>
        {/* handle showing products with pagination */}
            {filterdProducts.map((pro, i) => (
                i >= (page-1) * itemsNumberInPage && i < page * itemsNumberInPage  ? 
                <Product key={pro.id} product={pro} showMode={showMode} theme={theme} />
                : ""
            ))}
        </div>
        <Pagination itemsList={filterdProducts} itemsNumberInPage={itemsNumberInPage} page={page} setPage={setPage} theme={theme} />

        </>
    )
}
