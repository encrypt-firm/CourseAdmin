import React from 'react'
import './Home.css'
import Messages from '../../Pages/Tarajia/Messages'
import Transactions from '../../Pages/Transactions/Transactions'
import Status from '../../Pages/Status/Status'


const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="image-menu-data">
                    <div className="left">
                        <div className="newOrders">
                            <div className="data">
                                {/* <Orders /> */}
                                <Messages />
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="Transactions">
                            <Transactions />
                        </div>
                    </div>

                    <div className="notifications">
                        <div className="messages">
                            <Status />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
