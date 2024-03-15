import axios from 'axios'

const API_URL = 'https://abanchiqschoolapi.onrender.com/api/auth/adminstration/lecs/';


// 'Content-Type': 'multipart/form-data',
const createFeed = async (feedData, token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    }
    const response = await axios.post(API_URL, feedData, config);
    console.log(response.data);
    return response.data;
}

const feedService = {
    createFeed
}


export default feedService










































