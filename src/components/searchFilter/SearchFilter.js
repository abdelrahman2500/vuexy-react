import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg';
import { FaList } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import './index.scss'

export default function SearchFilter({products, filterdProducts, setFilterdProducts, feature, handleByPrice, showProductFilter, showMode, setShowMode, theme}) {

    const[searchValue, setSearchValue] = useState("")
    const[active, setActive] = useState(false)

    // handle filter by searching
    function handleSearchByName(e){
        setSearchValue(e.target.value)
        console.log(filterdProducts);
        e.target.value.trim() ? setFilterdProducts(products.filter((product) => product.name.toLowerCase().includes(e.target.value.trim().toLowerCase()))) : setFilterdProducts(products)
    }

    // handle style of sorting button
    function handleSortBtn(){
        setActive(active ? false : true )
    }

    return (
        <div className={`search-filter ${theme}-theme`}>
            <div className='search-row'>
                <h4>{filterdProducts.length} results found</h4>
                <div className='toggle-menu' onClick={()=> showProductFilter()}><GiHamburgerMenu /></div>
                <div className='btns'>
                    <div className='features'>
                        <button className='features-btn' onClick={() => handleSortBtn()}>{feature} <RiArrowDownSLine /></button>
                        <ul className={active ? "active" : ""}>
                            <li onClick={(e) => {handleByPrice(e); handleSortBtn()}}>Featured</li>
                            <li onClick={(e) => {handleByPrice(e); handleSortBtn()}}>Lowest</li>
                            <li onClick={(e) => {handleByPrice(e); handleSortBtn()}}>Highest</li>
                        </ul>
                    </div>
                    <div className='group-btns'>
                        <button className={`${showMode == 'menu-mode' ? 'active': ''}`} onClick={() => setShowMode("menu-mode")}><CgMenuGridR /></button>
                        <button className={`${showMode == 'list-mode' ? 'active': ''}`}  onClick={() => setShowMode("list-mode")}><FaList /></button>
                    </div>
                </div>
            </div>
            <form>
                <input type="text" placeholder='Search Product' value={searchValue} onChange={(e)=> handleSearchByName(e)} />
                <span><FiSearch /></span>
            </form>
        </div>
    )
}
