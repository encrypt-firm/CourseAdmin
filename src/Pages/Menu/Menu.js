import React from 'react'
import './Menu.css'
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiUploadCloud2Fill } from "react-icons/ri";
import { SiGooglephotos } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { RiNotification4Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";



const Menu = () => {
    return (
        <>
            <div className="navigation">
                <Link to='/' className='Link'>
                    <CiHome className='icons' />
                    <p>Home</p>
                </Link>
                <Link to='/dashboard/:userid/uploads' className='Link'>
                    <RiUploadCloud2Fill className='icons' />
                    <p>Create</p>
                </Link>
                <Link to='/dashboard/:userid/products' className='Link'>
                    <SiGooglephotos className='icons' />
                    <p>Products</p>
                </Link>
                <Link to='/dashboard:userid/settings' className='Link'>
                    <RiNotification4Fill className='icons' />
                    <p>Orders</p>
                </Link>
                <Link to='/dashboard:userid/notifications' className='Link'>
                    <BiSolidMessageSquareDetail className='icons' />
                    <p>Messages</p>
                </Link>
                <Link to='/dashboard/:userid/profile' className='Link'>
                    <FaUser className='icons' />
                    <p>Profile</p>
                </Link>
            </div>
        </>
    )
}

export default Menu
