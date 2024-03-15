import React from 'react'
import './Register.css'
import { FaUserLarge } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";


function Register() {
    return (
        <div className='Register'>
            <div className="mobile-wrapper">
                <div className="register-title">Create your <br />account!</div>
                <div className="register-form-wrapper">
                    <form className="register-form" action="#">

                        <div className="input-wrapper">
                            <div className="profile-wrapper">
                                <FaUserLarge className="icon fa-user profile-icon" />
                            </div>
                            <div className="input-group profile-input-group">
                                <input type="text" name="firstname" placeholder="First name" />
                                <input type="text" name="firstname" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <div className="input-group info-input-group">
                                <label for="email"> <IoMail className="icon fa-envelope" /></label>
                                <input type="email" name="email" id="email" placeholder="E-mail" />
                            </div>
                            <div className="input-group info-input-group">
                                <label for="password"> <IoLockClosed className="icon fa-unlock" /></label>
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className="input-group info-input-group">
                                <label for="confirmpassword"> <IoLockClosed className="icon fa-unlock" /></label>
                                <input type="password" name="confirmpassword" id="password" placeholder="Confirm Password" />
                            </div>
                            <div className="input-group info-input-group">
                                <label for="phone"><IoMdPhonePortrait className="icon fa-mobile-alt" /></label>
                                <input type="text" name="phone" id="phone" placeholder="Phone Number" />
                            </div>
                        </div>
                        <button className="register-btn">GET STARTED</button>
                    </form>
                </div>
                <p className="help-text">Already have an account? <span>Login.</span></p>
            </div>
        </div>
    )
}

export default Register