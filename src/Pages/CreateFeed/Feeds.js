import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostAsync } from './../../features/Feed/feedSlice';

function AddPostForm() {
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    categories: '',
    images: [], // Include images in your state
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    // Update the images array in postData state
    setPostData({
      ...postData,
      images: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData instance to handle files
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('description', postData.description);
    formData.append('categories', postData.categories);
    // Append each image file to the formData
    Array.from(postData.images).forEach(image => {
      formData.append('images', image);
    });

    // Dispatch the action with formData
    // Note: Your addPostAsync thunk should be adjusted to handle FormData
    dispatch(addPostAsync(formData));

    // Reset the form or handle success feedback
    setPostData({
      title: '',
      description: '',
      categories: '',
      images: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={postData.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <textarea
        name="description"
        value={postData.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="categories"
        value={postData.categories}
        onChange={handleInputChange}
        placeholder="Categories (comma separated)"
      />
      <input
        type="file"
        name="images"
        onChange={handleFileChange}
        multiple
      />
      <button type="submit">Submit Post</button>
    </form>
  );
}

export default AddPostForm;
