import axios from 'axios'

const API_URL = 'https://abanchiqschoolapi.onrender.com/api/auth/adminstration/private/'



const getAllFeeds = async () => {
    const response = await axios.get(`${API_URL}`)
    return response.data
}
// const login = async (userData) => {
//     const response = await axios.post(`${API_URL}login`, userData)

//     if (response.data) {
//         localStorage.setItem('user', JSON.stringify(response.data))
//     }
//     return response.data
// }

// const logout = async () => {
//     localStorage.removeItem('user')
// }




const newsService = {
    getAllFeeds
}


export default newsService










































