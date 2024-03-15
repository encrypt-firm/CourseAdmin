import React from 'react';

import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';
import Home from './Components/Home/Home';

// import Navbar from './Components/Navbar/Navbar';

import Orders from './Pages/Orders/Orders';
import Notifications from './Pages/Notifications/Notifications';
import Products from './Pages/Products/Products';

// import DatabaseUpload from './Pages/CreateFeed/Feeds.js'
import LoginPage from './Pages/Login/LoginPage.js'
import RegisterPage from './Pages/Register/RegisterPage.js'
import Feeds from './Pages/CreateFeed/Feeds.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/Header/Header.js';


function App() {

  const Layout = () => {
    return (
      <div className="mainApp">
        <div className="navbar">
          <Header />
        </div>
        <div className="mainContainer">
          <div className="menuContainer">
            <div className="menu">
              <Menu />
            </div>
          </div>
          <div className="contentContainer">
            <div className="Outlet">
              <Outlet />
            </div>
          </div>
        </div>
        {/* <div className="Footer">Footer</div> */}
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="Home"><LoginPage /></div>
    },
    {
      path: '/dashboard',
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <div className="Home">
            <Home />
          </div>
        },
        {
          path: "/dashboard/:userid/uploads",
          element: <div className="Home"><Feeds /></div>
        },
        {
          path: "/dashboard/:userid/products",
          element: <div className="Home"><Products /></div>
        },
        {
          path: "/dashboard/:userid/profile",
          element: <div className="Home">Profile</div>
        },
        {
          path: "/dashboard/:userid/notifications",
          element: <div className="Home"><Notifications /></div>
        },
        {
          path: "/dashboard/:userid/settings",
          element: <div className="Home"><Orders /></div>
        },
      ]
    },
    {
      path: "/login",
      element: <div className="Home">
        <LoginPage />
      </div>
    },
    {
      path: "/register",
      element: <div className="Home">
        <RegisterPage />
      </div>
    },
    {
      path: "/*",
      element: <div className="Home">404</div>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        draggable
        newestOnTop
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default App;
