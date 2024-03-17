import React, { useState } from 'react'
// import FirebaseFileInput from './FirebaseUploads'
import axios from 'axios'
import './form.css'


const DatabaseUpload = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        categories: "",
        img: "",
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = process.env.REACT_APP_API_URL + "/songs"
            const { data: res } = await axios.post(url, data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='container2'>
            <form className='form2' onSubmit={handleSubmit} >
                <h1 className='heading2'>Upload Your Product</h1>
                <input
                    type="text"
                    className='input2'
                    placeholder="Enter Product Name"
                    name="title"
                    onChange={handleChange}
                    value={data.name}
                />
                <textarea
                    type="text"
                    className='input2 description'
                    placeholder="Enter Product Description"
                    name="description"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    type="text"
                    className='input2'
                    placeholder="Enter Your Product Price"
                    name="price"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    type="text"
                    className='input2'
                    placeholder="Select Categories"
                    name="categories"
                    onChange={handleChange}
                    value={data.artist}
                />
                <FirebaseFileInput
                    name="img"
                    label="Choose Image"
                    handleInputState={handleInputState}
                    type="image"
                    value={data.img}
                />
                {/* <FirebaseFileInput
                    name="song"
                    label="Choose Song"
                    handleInputState={handleInputState}
                    type="audio"
                    value={data.song}
                /> */}
                <button type="submit" className='submit_btn2' >
                    Submit
                </button>
            </form>
        </div>
    );

}

export default DatabaseUpload
