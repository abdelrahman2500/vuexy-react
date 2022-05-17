import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import { AiOutlineCalendar, AiOutlineMail, AiOutlineHome,AiOutlineUser } from 'react-icons/ai';
import { BsChatLeft ,BsRecordCircle } from 'react-icons/bs';
import { FaFileInvoice } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineContactPage } from 'react-icons/md';
import { FcTodoList } from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import './index.scss'


export default function Sidebar({activeSideBar ,theme}) {
    return (
        <div className={`sidebar ${activeSideBar} ${theme}-theme`}>
            <div className='sidebar-header'>
                <div className='logo'>
                    <div className='logo-img'>
                        <img src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg' />
                    </div>
                    <div className='logo-name'>
                        <h2>Vuexy</h2>
                        <BsRecordCircle />
                    </div>
                </div>
            </div>
            <div className='dashboards'>
            {/* dropdown accept icon ,head and list to show */}
                <Dropdown theme={theme} icon={<AiOutlineHome />} head="Dashboards" list={["eCommerce", "Analystics"]} />
                <Dropdown theme={theme} head="APPS & PAGES"  />
                <Dropdown theme={theme} head="Email" icon={<AiOutlineMail />} />
                <Dropdown theme={theme} head="Chat" icon={<BsChatLeft />} />
                <Dropdown theme={theme} head="Todo" icon={<FcTodoList />} />
                <Dropdown theme={theme} head="Calender" icon={<AiOutlineCalendar />} />
                <Dropdown theme={theme} head="USER INTERFACE"  />
                <Dropdown theme={theme} icon={<AiOutlineUser />} head="Dashboards" list={["List", "View", "Edit"]} />
                <Dropdown theme={theme} icon={<FaFileInvoice />} head="Invoice" list={["List", "Preview", "Edit", "Add"]} />
                <Dropdown theme={theme} icon={<FiShoppingCart />} head="eCommerce" list={["Shop", "Details", "Checkout"]} />
                <Dropdown theme={theme} icon={<AiOutlineUser />} head="Dashboards" list={["List", "View", "Edit"]} />
                <Dropdown theme={theme} icon={<MdOutlineContactPage />} head="Dashboards" />
                <Dropdown theme={theme} icon={<FaFileInvoice />} head="Invoice" list={["List", "Preview", "Edit", "Add"]} />
                <Dropdown theme={theme} icon={<MdOutlineContactPage />} head="Dashboards" />
                <Dropdown theme={theme} head="FORMS & TABLES"  />
                <Dropdown theme={theme} icon={<MdOutlineContactPage />} head="Dashboards" />
                <Dropdown theme={theme} icon={<GiHamburgerMenu />} head="Menu Levels" list={["List", {name: "Sub Menu", subList: ["List", "Preview", "Edit", "Add"]}, "Edit"]} />
                <Dropdown theme={theme} icon={<MdOutlineContactPage />} head="Dashboards" />
                <Dropdown theme={theme} icon={<MdOutlineContactPage />} head="Dashboards" />
                <Dropdown theme={theme} icon={<FaFileInvoice />} head="Invoice" list={["List", "Preview", "Edit", "Add"]} />
            </div>
        </div>
    )
}
