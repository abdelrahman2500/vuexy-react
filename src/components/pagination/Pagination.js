import React from 'react';
import './index.scss'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'

export default function Pagination({itemsList, itemsNumberInPage, page, setPage, theme}) {
    
    function handlePagination(i){
        setPage(i+1)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // Pagination component accepts itemlist , number of items in page, page number to handle it dynamic

    return(
        <div className={`pagination ${theme}-theme`}>
            {itemsList.length ? itemsList.length ? typeof itemsNumberInPage == "number" ? itemsList.length > itemsNumberInPage ? 
                <div className='pagination-list'>
                    <span className={`pagination-item before ${page == 1 ? 'disable' : ''}`} 
                        onClick={()=> {
                            setPage(page > 1 ? page-1 : page);
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });}}
                    ><MdOutlineArrowBackIosNew /></span>
                    <div className='numbers'>
                        {itemsList.map((_,i) => 
                            i < Math.ceil(itemsList.length / itemsNumberInPage) ? 
                            <button className={`pagination-item ${i+1 == page ? "active" : ""}`} key={i} onClick={()=> handlePagination(i)}>
                                <span>{i+1}</span>    
                            </button>
                            :""
                        )}

                    </div>
                    <span className={`pagination-item after ${page == Math.ceil(itemsList.length / itemsNumberInPage) ? 'disable' : ''}`} 
                        onClick={()=> {
                            setPage(page < Math.ceil(itemsList.length / itemsNumberInPage) ? page+1 : page);
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })}}
                        ><MdOutlineArrowForwardIos /></span>
                </div>

            : "" : "" : "": ""}

        </div>
    ) ;
}
