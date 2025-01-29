import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api/api'

export const categoryAdd = createAsyncThunk(
    'category/categoryAdd',
    async({name, image}, {rejectWithValue, fulfillWithValue}) => {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)
            const {data} = await api.post('/add-category', formData, {
                withCredentials: true
            })
            // console.log(data);
            
            return fulfillWithValue(data)
            
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)

export const get_category = createAsyncThunk(
    'category/get_category',
    async({perPage, page, searchValue}, {rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get(`/get-category?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, {
                withCredentials: true
            })
            console.log(data);
            
            return fulfillWithValue(data)
            
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)

export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async({id, name, image}, {rejectWithValue, fulfillWithValue}) => {
        try {
            const formData = new FormData()
            formData.append('name', name)
            if (image) {
                formData.append('image', image)
            }
            const {data} = await api.put(`/update-category/${id}`, formData, {
                withCredentials: true
            })
            // console.log(data);
            
            return fulfillWithValue(data)
            
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)

export const deleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async(id, {rejectWithValue}) => {
        try {
            const response = await api.delete(`/category/${id}`)   
            return response.data
            
        } catch (error) {
            return rejectWithValue(error.response.data.message)
            
        }
    }
)

export const categoryReducer = createSlice({
    name: 'category',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        categories: [],
        totalCategory: 0  
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(categoryAdd.pending, (state, {payload}) => {
            state.loader = true
        })
        .addCase(categoryAdd.rejected, (state, {payload}) => {
            state.loader = false
            state.errorMessage = payload.error
        })
        .addCase(categoryAdd.fulfilled, (state, {payload}) => {
            state.loader = false
            state.successMessage = payload.msg
            state.categories = [...state.categories, payload.category]
        })

        .addCase(get_category.fulfilled, (state, {payload}) => {
            state.totalCategory = payload.totalCategory
            state.categories = payload.categories
        })

        .addCase(updateCategory.fulfilled, (state, {payload}) => {
            state.loader = false;
            state.successMessage = payload.msg
            const index = state.categories.findIndex((cat) => cat._id === 
        payload.category._id)
            if (index !== -1) {
                state.categories[index] = payload.category
            }
        })
        
        .addCase(updateCategory.rejected, (state, {payload}) => {
            state.loader = false
            state.errorMessage = payload.error
        })

        .addCase(deleteCategory.fulfilled, (state, action) => {
            state.categories = state.categories.filter(cat => cat._id !== action.meta.arg)
            state.successMessage = action.payload.message
        })

        .addCase(deleteCategory.rejected, (state, action) => {
            state.errorMessage = action.payload
        })
    }
})

export const {messageClear} = categoryReducer.actions

export default categoryReducer.reducer
