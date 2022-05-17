import React, {  useState } from 'react'
import {MdOutlineKeyboardArrowRight ,MdOutlineKeyboardArrowDown} from "react-icons/md"
import './index.scss'

export default function Dropdown({icon, head , list, theme}) {
    
    const [active, setActive] = useState("dis-active")

    return (
        <div className={`dropdown ${theme}-theme`}>
            <div className={`dropdown-head  ${active == "active" ? "active" : ""}`}>
                
            {/* if dropdwon have icon or not */}
                {icon && icon}
                <h3 className={!icon ? "heading" : ""} onClick={() => list && setActive(active == "active" ? "dis-active" : "active")}>
                    {head}
                    {list ? active == "active" ?  <MdOutlineKeyboardArrowDown/>  : <MdOutlineKeyboardArrowRight /> : "" }
                </h3>
            </div>
            {/* if dropdwon have list or not */}
            {
                list && 
                    <ul className={active}>
                        {list.map((item, i) => (
                            <li key={i} className={i == 0 ? "active" : ""}>
                            {item.name ? "" : 
                                <svg  width="14px" height="14px"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" strokeLinejoin="round" 
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                </svg>    
                            }
                                {item.name && item.subList ? 
                                <Dropdown theme={theme} 
                                    icon={<svg  width="14px" height="14px"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                                            strokeLinecap="round" strokeLinejoin="round" 
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                        </svg>} 
                                    head={item.name} 
                                    list={item.subList}
                                /> 
                                : item
                                }
                            </li>
                        ))}
                    </ul>
            }
        </div>
    )
}
