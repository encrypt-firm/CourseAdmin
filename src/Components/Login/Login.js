import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { RxAvatar } from "react-icons/rx"
// import './login.css'
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import { CiFacebook } from "react-icons/ci";
import Spinner from '../Spinner/Spinner'
import { login, reset } from '../../features/Auth/authSlice'
import './Login.css'


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        dispatch(login(userData));
    };

    useEffect(() => {
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    const [visible, setVisible] = useState(false);


    useEffect(() => {
        if (isError) {
            toast.error(message)
            dispatch(reset());
        }

        if (isSuccess || user) {
            navigate('/dashboard')
            dispatch(reset());
        }
    }, [isSuccess, isError, message, user, navigate, dispatch]);


    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='Login'>
            <form onSubmit={onSubmit}>
                <div className="contanier">
                    <h1>Hello, Let's log you back</h1>
                    <div className="login">
                        <div className="l-cover">
                            {/* <label id="userLabel">Email</label> */}
                            <input
                                className="usInput"
                                // type="text"
                                placeholder="Type your Email"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="l-cover">
                            {/* <label id="passLabel">Password</label> */}
                            <input className="pwInput"
                                // type="password"
                                placeholder="Type your password"
                                id="password"
                                type={visible ? "text" : "password"}
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={onChange}
                                required
                            />
                            {visible ? (
                                <AiOutlineEye
                                    className="eye"
                                    onClick={() => setVisible(false)}
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    className="eye"
                                    onClick={() => setVisible(true)}
                                />
                            )}
                        </div>
                        {/* <p>Or Create Account</p> */}
                        <p><Link className='Link' to='/account/forgot-password'>Forgot Password?</Link></p>
                    </div>
                    <button id="login-Button" type='submit'>LOGIN</button>
                    <div className="or">
                        {/* <hr /> */}
                        <p>Or 😉</p>
                    </div>
                    <div className="options">
                        {/* <CiFacebook id="F" class="fa-brands fa-facebook" /> */}
                        {/* <CiFacebook id="S" class="fa-brands fa-twitter" /> */}
                        <CiFacebook id="F" class="fa-brands fa-google" />
                        {/* <i id="S" class="fa-brands fa-twitter"></i> */}
                        {/* <i id="T" class="fa-brands fa-google"></i> */}
                    </div>
                    <p className="signUp">Need to create an account?  <Link className='Link' to='/register'>Create Account</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login