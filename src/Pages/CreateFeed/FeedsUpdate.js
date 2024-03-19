import React, { useEffect, useState } from 'react'
import { reset, updateSingleFeedAsync } from '../../features/Feed/feedUploadSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../Components/Spinner/Spinner'
import { toast } from "react-toastify"
import { fetchSingleFeedAsync } from '../../features/Feed/singleFetchSlice'

function FeedsUpdate() {
    const { id } = useParams();
    const { isLoading, message, isError, isSuccess } = useSelector(state => state.courseUpload);
    const { post, isLoadingData } = useSelector(state => state.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        title: '',
        overview: '',
        description: '',
        duration: '',
        cost: '',
        categories: '',
        images: [],
    });
    useEffect(() => {
        if (id) {
            dispatch(fetchSingleFeedAsync(id));
        }
    }, [dispatch, id]);

    // This useEffect watches for changes on `post` and updates `postData` accordingly
    useEffect(() => {
        if (post.title || post.description) {
            setPostData({
                title: post.title || '',
                description: post.description || '',
                categories: post.categories || '',
                overview: post.overview || '',
                duration: post.duration || '',
                cost: post.cost || '',
                images: [],
            });
        }
    }, [post]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setPostData({
            ...postData,
            images: e.target.files,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('description', postData.description);
        formData.append('overview', postData.overview);
        formData.append('duration', postData.duration);
        formData.append('cost', postData.cost);
        formData.append('categories', postData.categories);
        Array.from(postData.images).forEach(image => {
            formData.append('images', image);
        });
        dispatch(updateSingleFeedAsync({ id, formData }));
        setPostData({
            title: '',
            description: '',
            categories: '',
            images: [],
        });
    };


    useEffect(() => {
        if (isError) {
            toast.error(message);
            dispatch(reset());
        } else if (isSuccess) {
            toast.success("Post created successfully");
            navigate('/')
            dispatch(reset());
        }
    }, [isSuccess, isError, message, dispatch, navigate]);

    if (isLoadingData) {
        return <Spinner />
    }
    if (isLoading) {
        return <Spinner />
    }



    return (
        <div className="create-feed">
            <form onSubmit={handleSubmit}>
                <div className="title-edit">
                    <h2>You are editing: <br />{post.title} </h2>
                </div>
                <input
                    required
                    type="text"
                    name="title"
                    value={postData.title}
                    onChange={handleInputChange}
                    placeholder="Course Title"
                />
                <textarea
                    required
                    name="overview"
                    value={postData.overview}
                    onChange={handleInputChange}
                    placeholder="Brief overview infomation"
                />
                <textarea
                    required
                    name="description"
                    value={postData.description}
                    onChange={handleInputChange}
                    placeholder="Detailed Description"
                />
                <input
                    required
                    type="text"
                    name="duration"
                    value={postData.duration}
                    onChange={handleInputChange}
                    placeholder="Course duration"
                />
                <input
                    required
                    type="text"
                    name="cost"
                    value={postData.cost}
                    onChange={handleInputChange}
                    placeholder="Course Charges"
                />
                {/* Category dropdown */}
                <div className="form-group">
                    <select
                        required
                        name="categories"
                        value={postData.categories}
                        onChange={handleInputChange}
                        className="custom-select-box"
                    >
                        <option value="">Choose Category</option>
                        <option value="Category One">Category One</option>
                        <option value="Category Two">Category Two</option>
                        <option value="Category Three">Category Three</option>
                        <option value="Category Four">Category Four</option>
                    </select>
                </div>
                <input
                    required
                    type="file"
                    name="images"
                    onChange={handleFileChange}
                    multiple
                    className='file-upload'
                />
                <button type="submit">Update Course</button>
            </form>
        </div>
    )
}

export default FeedsUpdate
