import React, { useEffect, useState, useRef } from 'react'
import './header.css'
import Logo from './../../Assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'

// import { GiSellCard } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { logout, reset } from '../../features/Auth/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AiOutlineSchedule } from "react-icons/ai";




function Header() {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const [showMenuIcon, setShowMenuIcon] = useState(false);
    const menuRef = useRef(null);
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenuIcon(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    useEffect(() => {

        const hanndleScroll = () => {
            const scrolled = window.scrollY > 60
            setActive(scrolled)
        }

        window.addEventListener('scroll', hanndleScroll)

        return () => {
            window.removeEventListener('scroll', hanndleScroll)
        }
    })


    return (
        <div className='Header'>
            <div className="cover">
                <div className="logo">
                    <Link className='Link' to='/'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <li> <Link className='Link' to='/category/oils'>Courses</Link></li>
                        {/* <li> <Link className='Link' to='/products'>Vibe X</Link></li> */}
                        <li> <Link className='Link' to='/ingredients'>Ingredients</Link></li>
                        <li> <Link className='Link' to='/FAQ'>FAQ</Link></li>
                    </ul>
                </div>

                <div className="sellers">
                    <Link className='Link' to='/shop/create'>
                        <h2>Appointment <AiOutlineSchedule /></h2>
                    </Link>
                </div>
            </div>
            <div className={active ? 'cover2_active' : 'cover2'}>
                <div className="categoriesCover">
                    <div className="categories">
                        {user ? (
                            <>
                                {/* <h5 className='userName'>Hi {user.username}</h5> */}
                                {/* <Link className='userName' to={`/app/${user._id}`}> */}
                                <div className='userName' onClick={() => setShowMenuIcon(!showMenuIcon)}>
                                    <img src={user.profilePicture.url} alt="profile" />
                                </div>
                                {showMenuIcon && (
                                    <div ref={menuRef} className="menuIcon">
                                        <Link to={`/app/${user._id}`}><button>My Dashboard</button></Link>
                                        <Link><button onClick={onLogout}>Logout</button></Link>
                                    </div>
                                )}
                                {/* <div className="menuIcon">

                                </div> */}

                            </>

                        ) : (
                            <>
                                {/* <li>
                                        <Link to='/login' className='linkTo'><FaUserAlt /><span>LogIn</span></Link>
                                    </li> */}
                                <li>
                                    <Link to='/login' className='linkTo'><FaUser className='noneUser' /></Link>
                                </li>
                            </>
                        )
                        }
                    </div>

                    <nav className="headerNav">
                        <ul className='headerNav-ul'>
                            {/* <Link to='/shop/dashboard/cupouns'>
                                <li className="cartButton">
                                    <FaGifts className='cart-icon' />
                                    <div className="cart"><span>1</span></div>
                                </li>
                            </Link>
                            <Link to='/shop/dashboard/events'>
                                <li className="cartButton">
                                    <MdOutlineDeveloperBoard className='cart-icon' />
                                    <div className="cart"><span>4</span></div>
                                </li>
                            </Link> */}
                            <Link to='/shop/dashboard/events'>
                                <li className="cartButton">
                                    <BsCart4 className='cart-icon' />
                                    <div className="cart"><span>4</span></div>
                                </li>
                            </Link>
                            {/* <Link to='/shop/dashboard/events'>
                                <li className="cartButton">
                                    <LuPackagePlus className='cart-icon' />
                                    <div className="cart"><span>4</span></div>
                                </li>
                            </Link> */}
                        </ul >
                    </nav >
                </div>
            </div>
        </div>
    )
}

export default Header