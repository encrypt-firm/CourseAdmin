import axios from 'axios';

const API_URL = 'https://abanchiqschoolapi.onrender.com/api/auth/adminstration/lecs';

// Function to add a post
export const addPost = async (postData, token) => {
    try {
        const response = await axios.post(API_URL, postData, {
            headers: {
                Authorization: `Bearer ${token}`, // Assuming you handle authentication
                // 'Content-Type': 'application/json' is not needed; axios sets it automatically for JSON data
            },
        });

        console.log(token);

        return response.data; // axios automatically parses the JSON response, so just return response.data
    } catch (error) {
        // With axios, errors related to the response can be caught here
        // error.response will contain details about the response that triggered the error, if available
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = `An error has occurred: ${error.response.status}`;
            throw new Error(message);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("The request was made but no response was received");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error", error.message);
        }
    }
};
