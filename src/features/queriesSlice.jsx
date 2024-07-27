import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";


// INITIAL STATE
const initialState = {
    queries: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    createLoading: false,
    deleteLoading: false,
    updateLoading: false,
    message: ''
};

//API URL
const createQueriesUrl = "http://localhost:4000/api/v1/queries/create";
const getAllQueriesUrl = "http://localhost:4000/api/v1/queries/get";
const deleteQueriesUrl = "http://localhost:4000/api/v1/queries/delete";


// Create product
export const createQueryAsync = createAsyncThunk("query/create", async (formData, thunkAPI) => {
    try {
        const response = await axios.post(createQueriesUrl, formData);
        console.log(response.data);
        toast.success('Message sent successfully')
        return response.data;

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Get all product
export const getQueryAsync = createAsyncThunk("query/all", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(getAllQueriesUrl, config);
        console.log(response.data);
        return response.data;

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete product
export const deleteQuerysAsync = createAsyncThunk("query/delete", async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.delete(deleteQueriesUrl, { data: { id }, ...config });
        // toast.success(response.data.message)
        return response.data;

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


const queriesSlice = createSlice({
    name: "queriesSlice",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(createQueryAsync.pending, (state, action) => {
                state.createLoading = true;
            })
            .addCase(createQueryAsync.fulfilled, (state, action) => {
                state.createLoading = false;
                state.isSuccess = true;
                state.queries.push(action.payload)
            })
            .addCase(createQueryAsync.rejected, (state, action) => {
                state.createLoading = false;
                state.isError = true;
                state.message = action.payload;
            })



            .addCase(getQueryAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getQueryAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.queries = action.payload;
            })
            .addCase(getQueryAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })


            .addCase(deleteQuerysAsync.pending, (state, action) => {
                // state.isLoading = true;
                state.deleteLoading = true;
            })
            .addCase(deleteQuerysAsync.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.deleteLoading = false;
                state.isSuccess = true;
                state.queries = state.queries.filter((queries) => queries._id !== action.payload.id);
            })
            .addCase(deleteQuerysAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export default queriesSlice.reducer;


