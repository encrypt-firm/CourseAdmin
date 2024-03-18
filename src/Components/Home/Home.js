import React, { useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFeedsAsync } from '../../features/Feed/feedSlice'
import Spinner from '../Spinner/Spinner'
// import Messages from '../../Pages/Tarajia/Messages'
// import Transactions from '../../Pages/Transactions/Transactions'
// import Status from '../../Pages/Status/Status'

const Home = () => {
    const dispatch = useDispatch()
    const { posts, isLoading } = useSelector((state) => state.feed)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(fetchAllFeedsAsync())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <div className="Home">
                <header>
                    <div className="container">
                        <div className="profile">
                            <div className="profile-image">
                                {user.profilePicture && (
                                    <img src={user.profilePicture.url} alt="profile" />
                                )}
                            </div>

                            <div className="profile-user-settings">

                                <h1 className="profile-user-name">{user.name}</h1>

                                <button className="btn profile-edit-btn">Edit Profile</button>

                                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                            </div>

                            <div className="profile-stats">

                                <ul>
                                    <li><span className="profile-stat-count">...</span> posts</li>
                                    <li><span className="profile-stat-count">18</span> Students</li>
                                    {/* <li><span className="profile-stat-count">206</span> following</li> */}
                                </ul>

                            </div>

                            <div className="profile-bio">

                                <p><span className="profile-real-name">{user.name}</span>and am a Lecturer at AbanchiqSchoolOfFormulation 📷✈️🏕️</p>

                            </div>

                        </div>
                        {/* <!-- End of profile section --> */}

                    </div>
                    {/* <!-- End of container --> */}

                </header>

                <main>
                    <div className="container">
                        <div className="gallery">
                            {posts.map(post => (
                                <div className="gallery-item" tabindex="0" key={post._id}>
                                    {post.images && post.images.length > 0 && (
                                        <img src={post.images[0].url} className="gallery-image" alt="" />
                                    )}
                                    <div className="gallery-item-info">
                                        {/* <ul>
                                            <li className="gallery-item-likes"><span className="visually-hidden">Edit</span>
                                                <Link className='Link' to={`/editfeed/${post._id}`} >
                                                    <MdOutlineEditLocationAlt />
                                                </Link>
                                            </li>
                                            <li className="gallery-item-comments"><span className="visually-hidden">Delete</span>
                                                <Link className='Link' to={`/delete/${post._id}`}>
                                                    <MdOutlineEditLocationAlt />
                                                </Link>
                                            </li >
                                        </ul> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <!-- End of gallery --> */}
                        <div className="loader2"></div>
                    </div>
                    {/* <!-- End of container --> */}
                </main>
            </div>
        </>
    )
}

export default Home
