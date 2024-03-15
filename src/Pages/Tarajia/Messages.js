import React from 'react'
import './Messages.css'
const Messages = () => {
    return (
        <>
            <div className="Messages">
                <div class="notification-card">
                    <div class="notification-wrapper">
                        <div class="notification-header">
                            <h3>Notifications</h3>
                            <div class="mark-read">
                                <img src="https://www.svgrepo.com/show/391355/tick-double.svg" alt="" />
                                <a href="github.com">Mark as read</a>
                            </div>

                        </div>
                        <div class="notification-body">
                            <div class="notification-container">

                                <div class="notification-text">
                                    <div class="indicator-wrapper">
                                        <div class="indicator"></div>

                                    </div>
                                    <div class="notification-messages">
                                        <h3>Nike Shoes</h3>
                                        <h4>Has been Purchased, Please deliver the product to pick-up station.</h4>
                                        <p>Bought on Sep 14, 2021 at 10:11 AM</p>
                                        <p>Delivered by Sep 15, 2021 at 10:11 AM</p>

                                    </div>

                                </div>
                                <div class="notification-icon">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
                                </div>
                            </div>
                            <div class="notification-container">

                                <div class="notification-text">
                                    <div class="indicator-wrapper">
                                        <div class="indicator"></div>

                                    </div>
                                    <div class="notification-messages">
                                        <h3>Beard Oil</h3>
                                        <h4>Has been Purchased, Please deliver the product to pick-up station.</h4>
                                        <p>Bought on Sep 14, 2021 at 10:11 AM</p>
                                        <p>Delivered by Sep 15, 2021 at 10:11 AM</p>

                                    </div>

                                </div>
                                <div class="notification-icon">
                                    <img src="https://images.unsplash.com/photo-1627875777089-d32f1127e9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhcmQlMjBvaWx8ZW58MHx8MHx8fDA%3D" alt="product" />
                                </div>
                            </div>
                            <div class="notification-container">

                                <div class="notification-text">
                                    <div class="indicator-wrapper">
                                        <div class="indicator"></div>

                                    </div>
                                    <div class="notification-messages">
                                        <h3>Tumeric Soap</h3>
                                        <h4>Has been Purchased, Please deliver the product to pick-up station.</h4>
                                        <p>Bought on Sep 14, 2021 at 10:11 AM</p>
                                        <p>Delivered by Sep 15, 2021 at 10:11 AM</p>

                                    </div>

                                </div>
                                <div class="notification-icon">
                                    <img src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHR1bWVyaWMlMjBzb2FwfGVufDB8fDB8fHww" alt="product" />
                                </div>
                            </div>

                        </div>
                        <div class="notification-footer">
                            <a href="github.com">View all notifications</a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Messages
