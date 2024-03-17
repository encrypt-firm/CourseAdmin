import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPost } from './feedService';

// Async thunk for adding a post
export const addPostAsync = createAsyncThunk(
    'feed/addPost',
    async (postData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token; // Replace with your actual token path
            return await addPost(postData, token);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        posts: [],
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
    reducers: {
        // Reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPostAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addPostAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts.push(action.payload);
            })
            .addCase(addPostAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export default feedSlice.reducer;