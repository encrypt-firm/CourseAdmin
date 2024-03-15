import React from 'react'
import './Transactions.css'
import { GiPayMoney } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAccessTimeFilled } from "react-icons/md";

const Transactions = () => {
    return (
        <>
            <div className="Transactions">
                <div className="icon"><GiPayMoney />Transactions</div>
                <div className="t-cash">
                    <div className="left">
                        <FcMoneyTransfer />
                    </div>
                    <div className="right">
                        <div className="time"><MdAccessTimeFilled /> Just Now</div>
                        <div className="message">
                            <span className="name">Nike Shoes</span>Has Been Purchased @ Ksh 3500.
                        </div>
                    </div>
                </div>
                <div className="t-cash">
                    <div className="left">
                        <FcMoneyTransfer />
                    </div>
                    <div className="right">
                        <div className="time"><MdAccessTimeFilled /> Just Now</div>
                        <div className="message">
                            <span className="name">Nike Shoes</span>Has Been Purchased @ Ksh 3500.
                        </div>
                    </div>
                </div>
                <div className="t-cash">
                    <div className="left">
                        <FcMoneyTransfer />
                    </div>
                    <div className="right">
                        <div className="time"><MdAccessTimeFilled /> Just Now</div>
                        <div className="message">
                            <span className="name">Nike Shoes</span>Has Been Purchased @ Ksh 3500.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transactions
