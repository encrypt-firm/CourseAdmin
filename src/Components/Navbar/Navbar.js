import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <div className="Data-banner">
                    <div className="image-menu">
                        <img src="https://plus.unsplash.com/premium_photo-1686754185788-12b50c02521a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3BwaW5nfGVufDB8fDB8fHww" alt="profile" />
                    </div>
                    <div className="cover">
                        <div className="circle1">
                            Ksh 14000
                        </div>
                        <h3>Total Income</h3>
                    </div>
                    <div className="cover center">
                        <div className="circle1 lines">
                            6
                        </div>
                        <h3>Orders </h3>
                    </div>
                    <div className="cover">
                        <div className="circle1">
                            18
                        </div>
                        <h3>Total Sold Products</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
