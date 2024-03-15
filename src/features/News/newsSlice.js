import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsService from "./newsService";



const initialState = {
    Feeds: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// @****************************************@
// ---------------GET ALL Courses ----
// @****************************************@

export const getAllNewsFeeds = createAsyncThunk('Feeds/getAllNewsFeeds', async (_, thunkAPI) => {
    try {
        return await newsService.getAllFeeds()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// Login User
// export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
//     try {
//         return await authService.login(user)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// Logout 

// export const logout = createAsyncThunk('auth/logout', async () => {
//     await authService.logout()
// })



export const newsSlice = createSlice({
    name: 'Feeds',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllNewsFeeds.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllNewsFeeds.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.Feeds = action.payload
            })
            .addCase(getAllNewsFeeds.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.Feeds = []
            })

    }
})



export const { reset } = newsSlice.actions
export default newsSlice.reducer;