import axios from 'axios';

const API_URL = 'https://abanchiqschoolapi.onrender.com/api/auth/adminstration/lecs';

// Function to add a post
export const addPost = async (postData, token) => {
    try {
        const response = await axios.post(API_URL, postData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // console.log(token);

        return response.data;
    } catch (error) {

        if (error.response) {
            const message = `An error has occurred: ${error.response.status}`;
            throw new Error(message);
        } else if (error.request) {
            console.error("The request was made but no response was received");
        } else {
            console.error("Error", error.message);
        }
    }
};
