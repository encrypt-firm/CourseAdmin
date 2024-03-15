// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import './register.css'
// import { createItem, reset } from './../../features/Item/itemSlice'
// import { toast } from "react-toastify"
// import { useDispatch, useSelector } from 'react-redux'
// import Spinner from './../../Components/Spinner/Spinner.js'

// function CreateFeed() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { isLoading, isError, isSuccess, message } = useSelector((state) => state.item)

//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         price: '',
//         files: [],
//     });

//     const { title, description, price } = formData;

//     const onChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onFileChange = (e) =>
//         setFormData({ ...formData, files: [...e.target.files] });

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const itemData = new FormData();
//         itemData.append('title', title);
//         itemData.append('description', description);
//         itemData.append('price', price);
//         formData.files.forEach(file => {
//             itemData.append('files', file);
//         });

//         dispatch(createItem(itemData));
//     };

//     useEffect(() => {
//         return () => {
//             dispatch(reset());
//         };
//     }, [dispatch]);

//     useEffect(() => {
//         if (isError) {
//             toast.error(message);
//             dispatch(reset());
//         }
//         if (isSuccess) {
//             toast.success("Item created successfully.");
//             navigate("/");
//             dispatch(reset());
//         }
//     }, [isSuccess, isError, message, navigate, dispatch]);

//     if (isLoading) {
//         return <Spinner />
//     }

//     return (
//         <div className='CreateItem'>
//             <form onSubmit={onSubmit}>
//                 <div className="container">
//                     <h1>Add New Item</h1>
//                     <div className="itemForm">
//                         <label htmlFor="title">Title</label>
//                         <input
//                             className="input"
//                             type="text"
//                             id="title"
//                             name="title"
//                             value={title}
//                             onChange={onChange}
//                             required
//                         />
//                         <label htmlFor="description">Description</label>
//                         <textarea
//                             className="input"
//                             id="description"
//                             name="description"
//                             value={description}
//                             onChange={onChange}
//                             required
//                         />
//                         <label htmlFor="price">Price</label>
//                         <input
//                             className="input"
//                             type="text"
//                             id="price"
//                             name="price"
//                             value={price}
//                             onChange={onChange}
//                             required
//                         />
//                         <label htmlFor="files">Upload Files</label>
//                         <input
//                             className="input"
//                             type="file"
//                             id="files"
//                             name="files"
//                             onChange={onFileChange}
//                             multiple
//                             required
//                         />
//                     </div>
//                     <button type='submit'>Create Item</button>
//                     <p className="signIn">Already have an account? <Link to='/login'>Login</Link></p>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default CreateFeed;
