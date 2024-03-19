import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSingleFeed, deleteFeed } from './feedService';


const initialState = {
    post: [],
    isErrorData: false,
    isSuccessData: false,
    isLoadingData: false,
    messageData: '',
}



export const fetchSingleFeedAsync = createAsyncThunk(
    'feedUploadSlice/fetchSingle',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await getSingleFeed(id, token);
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteFeedAsync = createAsyncThunk(
    'feedUploadSlice/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            await deleteFeed(id, token);
            return id;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);



export const singleFetchSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        reset: (state) => {
            state.post = [];
            state.isErrorData = false;
            state.isSuccessData = false;
            state.isLoadingData = false;
            state.messageData = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleFeedAsync.pending, (state) => {
                state.isLoadingData = true;
            })
            .addCase(fetchSingleFeedAsync.fulfilled, (state, action) => {
                state.isLoadingData = false;
                state.isSuccessData = true;
                state.post = action.payload;
            })
            .addCase(fetchSingleFeedAsync.rejected, (state, action) => {
                state.isLoadingData = false;
                state.isErrorData = true;
                state.messageData = action.payload;
            })
            .addCase(deleteFeedAsync.fulfilled, (state, action) => {
                state.post = state.post.filter(post => post._id !== action.payload);
            })
    },
});

export const { reset } = singleFetchSlice.actions;
export default singleFetchSlice.reducer;