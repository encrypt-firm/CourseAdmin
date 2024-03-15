import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './../../Components/Spinner/Spinner'
import './Feed.css'
import { createFeed, reset } from '../../features/Feed/feedSlice'
function Feeds() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.feed)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categories: [],
        files: [],
    });

    const { title, description } = formData;
    const onChange = (e) => {
        if (e.target.name === "categories") {
            const options = e.target.options;
            let value = [];
            for (let i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            setSelectedCategories(value);
            setFormData(prevState => ({ ...prevState, categories: value }));
        } else {
            setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        }
    };

    const onFileChange = (e) =>
        setFormData({ ...formData, files: [...e.target.files] });

    const onSubmit = (e) => {
        e.preventDefault();

        const feedData = new FormData();
        feedData.append('title', title);
        feedData.append('description', description);
        formData.files.forEach(file => {
            feedData.append('files', file);
        });
        formData.categories.forEach(category => {
            feedData.append('categories', category);
        });

        dispatch(createFeed(feedData));
    };

    useEffect(() => {
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            toast.error(message);
            dispatch(reset());
        }
        if (isSuccess) {
            toast.success("Feed Posted successfully.");
            navigate("/");
            dispatch(reset());
        }
    }, [isSuccess, isError, message, navigate, dispatch]);

    if (isLoading) {
        return <Spinner />
    }
    const selectCategories = ['Facials', 'Body', 'Oils', 'Fragnamce'];

    return (
        <div className='Feeds'>
            <form onSubmit={onSubmit}>
                <div className="container">
                    <h1>Add New Item</h1>
                    <div className="itemForm">
                        <div className="title">
                            <label htmlFor="title">Title</label>
                            <input
                                className="input"
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="description">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="input"
                                id="description"
                                name="description"
                                value={description}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="categories">
                            <label htmlFor="categories">Categories</label>
                            <select
                                className="input"
                                id="categories"
                                name="categories"
                                value={selectedCategories}
                                onChange={onChange}
                                multiple
                                required
                            >
                                {selectCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="uploadFiles">
                            <label htmlFor="files">Upload Files</label>
                            <input
                                className="input"
                                type="file"
                                id="files"
                                name="files"
                                onChange={onFileChange}
                                multiple
                                required
                            />
                        </div>
                    </div>
                    <button type='submit'>Post Feed</button>
                    <p className="signIn"><Link to='/login'>See your Feeds</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Feeds