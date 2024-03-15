import React from 'react'
import { useNavigate } from 'react-router-dom'

function DropDown({ categoriesData, setDropDown }) {
    const navigate = useNavigate()

    const submitHandler = (i) => {
        navigate(`/products?category=${i.title}`)
        setDropDown(false)
        // window.location.reload()
    }
    return (
        <div className='DropDown'>
            {
                categoriesData && categoriesData.map((i, index) => (
                    <div className='DropDown-item' key={index} onClick={() => submitHandler(i)}>
                        <img src={i.image_Url} alt="product" />
                        <h3>{i.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default DropDown