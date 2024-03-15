import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import feedService from "./feedService";

const initialState = {
    Feed: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// @****************************************@
// ---------------Create Feed ----
// @****************************************@

export const createFeed = createAsyncThunk('Feed/createFeed', async (feedData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await feedService.createFeed(feedData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})




export const feedSlice = createSlice({
    name: 'Feed',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createFeed.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createFeed.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.Feed = action.payload
            })
            .addCase(createFeed.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.Feed = []
            })

    }
})



export const { reset } = feedSlice.actions
export default feedSlice.reducer;