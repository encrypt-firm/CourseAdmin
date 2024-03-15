import React from 'react'
import './Orders.css'
import { RiSearch2Fill } from "react-icons/ri";

const Orders = () => {
    return (
        <>
            <main className='table' id='customers_table'>
                <section className="table__header">
                    <h1>Customer's Orders</h1>
                    <div className="input-group">
                        <input type="search" placeholder="Search Data..." />
                        <button className='search'><RiSearch2Fill /></button>
                    </div>
                    <div className="export__file">
                        <label for="export-file" className="export__file-btn" title="Export File"></label>
                        <input type="checkbox" id="export-file" />
                        <div className="export__file-options">
                            <label>Export As &nbsp; &#10140;</label>
                            <label for="export-file" id="toPDF">PDF <img src="../../Assets/pdf.png" alt="" /></label>
                            <label for="export-file" id="toJSON">JSON <img src="../../Assets/json.png" alt="" /></label>
                            <label for="export-file" id="toCSV">CSV <img src="../../Assets/csv.png" alt="" /></label>
                            <label for="export-file" id="toEXCEL">EXCEL <img src="../../Assets/excel.png" alt="" /></label>
                        </div>
                    </div>
                </section>

                <section className="table__body">
                    <table>
                        <thead>
                            <tr>
                                <th> Order Id </th>
                                <th> Customer</th>
                                <th> Station</th>
                                <th> Order Date</th>
                                <th> Status</th>
                                <th> Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1 </td>
                                <td> <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />Zinzu Chan Lee</td>
                                <td> Seoul </td>
                                <td> 17 Dec, 2022 </td>
                                <td>
                                    <p className="status delivered">Delivered</p>
                                </td>
                                <td> <strong> Ksh 128.90 </strong></td>
                            </tr>
                            <tr>
                                <td> 2 </td>
                                <td><img src="../../Assets/Jeet Saru.png" alt="" /> Jeet Saru </td>
                                <td> Kathmandu </td>
                                <td> 27 Aug, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 5350.50</strong> </td>
                            </tr>
                            <tr>
                                <td> 3</td>
                                <td><img src="../../Assets/Sonal Gharti.jpg" alt="" /> Sonal Gharti </td>
                                <td> Tokyo </td>
                                <td> 14 Mar, 2023 </td>
                                <td>
                                    <p className="status shipped">Shipped</p>
                                </td>
                                <td> <strong>Ksh 210.40</strong> </td>
                            </tr>
                            <tr>
                                <td> 4</td>
                                <td><img src="../../Assets/Alson GC.jpg" alt="" /> Alson GC </td>
                                <td> New Delhi </td>
                                <td> 25 May, 2023 </td>
                                <td>
                                    <p className="status delivered">Delivered</p>
                                </td>
                                <td> <strong>Ksh 149.70</strong> </td>
                            </tr>
                            <tr>
                                <td> 5</td>
                                <td><img src="../../Assets/Sarita Limbu.jpg" alt="" /> Sarita Limbu </td>
                                <td> Paris </td>
                                <td> 23 Apr, 2023 </td>
                                <td>
                                    <p className="status pending">Pending</p>
                                </td>
                                <td> <strong>Ksh 399.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 6</td>
                                <td><img src="../../Assets/Alex Gonley.jpg" alt="" /> Alex Gonley </td>
                                <td> London </td>
                                <td> 23 Apr, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 399.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 7</td>
                                <td><img src="../../Assets/Alson GC.jpg" alt="" /> Jeet Saru </td>
                                <td> New York </td>
                                <td> 20 May, 2023 </td>
                                <td>
                                    <p className="status delivered">Delivered</p>
                                </td>
                                <td> <strong>Ksh 399.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 8</td>
                                <td><img src="../../Assets/Sarita Limbu.jpg" alt="" /> Aayat Ali Khan </td>
                                <td> Islamabad </td>
                                <td> 30 Feb, 2023 </td>
                                <td>
                                    <p className="status pending">Pending</p>
                                </td>
                                <td> <strong>Ksh 149.70</strong> </td>
                            </tr>
                            <tr>
                                <td> 9</td>
                                <td><img src="../../Assets/Alex Gonley.jpg" alt="" /> Alson GC </td>
                                <td> Dhaka </td>
                                <td> 22 Dec, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 249.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 9</td>
                                <td><img src="../../Assets/Alex Gonley.jpg" alt="" /> Alson GC </td>
                                <td> Dhaka </td>
                                <td> 22 Dec, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 249.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 9</td>
                                <td><img src="../../Assets/Alex Gonley.jpg" alt="" /> Alson GC </td>
                                <td> Dhaka </td>
                                <td> 22 Dec, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 249.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 9</td>
                                <td><img src="../../Assets/Alex Gonley.jpg" alt="" /> Alson GC </td>
                                <td> Dhaka </td>
                                <td> 22 Dec, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 249.99</strong> </td>
                            </tr>
                            <tr>
                                <td> 9</td>
                                <td><img src="../../Assets/Alex Gonley.jpg" alt="" /> Alson GC </td>
                                <td> Dhaka </td>
                                <td> 22 Dec, 2023 </td>
                                <td>
                                    <p className="status cancelled">Cancelled</p>
                                </td>
                                <td> <strong>Ksh 249.99</strong> </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}

export default Orders
