import React, { useEffect, useState } from 'react'
import './index.scss'

export default function RangeSlider({products, setFilterdProducts, theme}) {
    const[minmax,setMinmax] = useState([])
    const[range1,setRange1] = useState(0)
    const[range2,setRange2] = useState(100)
    // products.sort((a,b) => (a.price > b.price) ? 1 : -1)
    useEffect(()=>{
        products.forEach(p => minmax.push(p.price))
        setMinmax(minmax)
        setRange1(Math.min(...minmax))
        setRange2(Math.max(...minmax))
    }, [])

    useEffect(()=>{
        handle()
    },[range1, range2])
    
    function handle(){
        setFilterdProducts(products.filter(pro => (
            range1 <= range2 ? pro.price >= range1 && pro.price <= range2 :  pro.price <= range1 && pro.price >= range2 
        )))
    }

    return (
        <>
            <label htmlFor="price-range">
                <h6>Price Range</h6>
                <span>{range1 <= range2 ? `${range1} : ${range2}` : `${range2} : ${range1}`}$</span>
            </label>
            <div className={`range-slider ${theme}-theme`}>
                <input type="range" step={.01} min={Math.min(...minmax)} max={Math.max(...minmax)} value={range1} onChange={(e) =>setRange1(Number(e.target.value)) } id="slider1" />
                <input type="range" step={.01} min={Math.min(...minmax)} max={Math.max(...minmax)} value={range2} onChange={(e) =>setRange2(Number(e.target.value)) } id="slider2" />
            </div>
        </>
    )
}
