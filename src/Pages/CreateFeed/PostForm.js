// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { addPostAsync, updateSingleFeedAsync } from '../../features/Feed/feedUploadSlice';
// // import { toast } from 'react-toastify';


// function PostForm({ initialPost }) {
//     const [postData, setPostData] = useState({
//         title: '',
//         description: '',
//         categories: '',
//         images: [],
//     });
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { id } = useParams(); // Used for editing

//     useEffect(() => {
//         if (initialPost) {
//             setPostData({ ...initialPost });
//         }
//     }, [initialPost]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setPostData({ ...postData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setPostData({ ...postData, images: e.target.files });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('title', postData.title);
//         formData.append('description', postData.description);
//         formData.append('categories', postData.categories);
//         Array.from(postData.images).forEach(image => {
//             formData.append('images', image);
//         });

//         if (id) {
//             dispatch(updateSingleFeedAsync(id, formData));
//         } else {
//             dispatch(addPostAsync(formData));
//         }

//         navigate("/"); // Adjust the navigation as needed
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 required
//                 type="text"
//                 name="title"
//                 value={postData.title}
//                 onChange={handleInputChange}
//                 placeholder="Title"
//             />
//             <textarea
//                 required
//                 name="description"
//                 value={postData.description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//             />
//             {/* Category dropdown */}
//             <div className="form-group">
//                 <select
//                     required
//                     name="categories"
//                     value={postData.categories}
//                     onChange={handleInputChange}
//                     className="custom-select-box"
//                 >
//                     <option value="">Choose Category</option>
//                     <option value="Category One">Category One</option>
//                     <option value="Category Two">Category Two</option>
//                     <option value="Category Three">Category Three</option>
//                     <option value="Category Four">Category Four</option>
//                 </select>
//             </div>
//             <input
//                 required
//                 type="file"
//                 name="images"
//                 onChange={handleFileChange}
//                 multiple
//             />
//             <button type="submit">Submit Post</button>
//         </form>// Form JSX similar to your AddPostForm
//     );
// }

// export default PostForm;
