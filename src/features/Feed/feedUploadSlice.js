import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, getSingleFeed, deleteFeed } from './feedService';


const initialState = {
    post: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const addPostAsync = createAsyncThunk(
    'feedUploadSlice/addPost',
    async (postData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await addPost(postData, token);
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

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



export const feedUploadSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        reset: (state) => {
            state.post = [];
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPostAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addPostAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.post.push(action.payload);
            })
            .addCase(addPostAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(fetchSingleFeedAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSingleFeedAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.post = action.payload;
            })
            .addCase(fetchSingleFeedAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteFeedAsync.fulfilled, (state, action) => {
                state.post = state.post.filter(post => post._id !== action.payload);
            })
    },
});

export const { reset } = feedUploadSlice.actions;
export default feedUploadSlice.reducer;