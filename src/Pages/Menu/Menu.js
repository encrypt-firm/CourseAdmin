import React from 'react'
import './Menu.css'
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiUploadCloud2Fill } from "react-icons/ri";
import { SiGooglephotos } from "react-icons/si";
import { FaUser } from "react-icons/fa";
// import { RiNotification4Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useSelector } from 'react-redux';



const Menu = () => {

    const { user } = useSelector(state => state.auth)
    return (
        <>
            <div className="navigation">
                <Link to='/' className='Link'>
                    <CiHome className='icons' />
                    <p>Home</p>
                </Link>
                <Link to={`/dashboard/uploads/${user?._id}`} className='Link'>
                    <RiUploadCloud2Fill className='icons' />
                    <p>Create</p>
                </Link>
                <Link to={`/dashboard/products/${user?._id}`} className='Link'>
                    <SiGooglephotos className='icons' />
                    <p>Products</p>
                </Link>
                <Link to={`/dashboard/notifications/${user?._id}`} className='Link'>
                    <BiSolidMessageSquareDetail className='icons' />
                    <p>Messages</p>
                </Link>
                <Link to={`/dashboard/profile/${user?._id}`} className='Link'>
                    <FaUser className='icons' />
                    <p>Profile</p>
                </Link>
            </div>
        </>
    )
}

export default Menu
