import React from 'react'
import './Status.css'
const Status = () => {
    return (
        <>
            <div className="Status">
                <div className="new">
                    <p><span className="entypo-feather"></span>Product Status</p>
                </div>
                <section className="messages">
                    <div className="message">
                        <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QURJREFTfGVufDB8fDB8fHww" alt='product' />
                        <h2>Nike Delivered Successfully</h2>
                        {/* <h2>No Issues Found</h2> */}
                        <p>No Issues found on the product delivered</p>
                        <p className="time"><span className="entypo-clock"></span> 5 mins ago</p>
                    </div>
                    <div className="message">
                        <img src="https://images.unsplash.com/photo-1627875777089-d32f1127e9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhcmQlMjBvaWx8ZW58MHx8MHx8fDA%3D" alt='product' />
                        <h2>Beard Oil Delivered Successfully</h2>
                        <p>No Issues found on the product delivered</p>
                        <p className="time"><span className="entypo-clock"></span> 3 mins ago</p>
                    </div>
                    <div className="message">
                        <img src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHR1bWVyaWMlMjBzb2FwfGVufDB8fDB8fHww" alt='product' />
                        <h2>Tumeric Soap was sucessfully Delivered</h2>
                        <p>No Issues found on the product delivered</p>
                        <p className="time"><span className="entypo-clock"></span> just now</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Status
