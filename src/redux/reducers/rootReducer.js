import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/config";

const initState = {
    switch: false,
    loading: false,
    bannerVideo: "",
    bannerImage: "",
    categories: [],
    products: [],
    colors: [],
    materials: [],
    sizes: [],
    categoryData: {},
    faqs: [],
    blogs: [],
    comments: [],
}

// get banner video
export const getBannerVideo = createAsyncThunk(
    'get/getBannerVideo',
    async (obj) => {
        try {
            const res = await axiosInstance.get("/banner/video/", { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get banner image
export const getBannerImage = createAsyncThunk(
    'get/getBannerImage',
    async (obj) => {
        try {
            const res = await axiosInstance.get("/banner/image/", { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all provinces
export const getAllCategories = createAsyncThunk(
    'get/getAllCategories',
    async (obj) => {
        try {
            const res = await axiosInstance.get("/category/", { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all product
export const getAllProducts = createAsyncThunk(
    'get/getAllProducts',
    async (obj) => {
        try {
            // console.log(`/product?page=${obj.selectedId}&page_size=12${obj.params}`);

            const res = await axiosInstance.get(`/product/?page=${obj.selectedId}&page_size=14${obj.params}`, { signal: obj?.signal });
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all colors
export const getAllColors = createAsyncThunk(
    'get/getAllColors',
    async (obj) => {
        try {
            const res = await axiosInstance.get("/product/color/", { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all materials
export const getAllMaterials = createAsyncThunk(
    'get/getAllMaterials',
    async (obj) => {
        try {
            const res = await axiosInstance.get("/product/material/", { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all sizes
export const getAllSizes = createAsyncThunk(
    'get/getAllSizes',
    async (obj) => {
        try {
            const res = await axiosInstance.get("/product/size/", { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all products with slug
export const getAllProductsWithSlug = createAsyncThunk(
    'get/getAllProductsWithSlug',
    async (obj) => {
        try {
            const res = await axiosInstance.get(`/product?slug=${obj.slug}&page=${obj.selectedId}&page_size=20`, { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all faqs
export const getAllFaqs = createAsyncThunk(
    'get/getAllFaqs',
    async (obj) => {
        try {
            const res = await axiosInstance.get(`/faq/`, { signal: obj?.signal })
            return res.data;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all blogs carousel
export const getAllBlogs = createAsyncThunk(
    'get/getAllBlogs',
    async (obj) => {
        try {
            const res = await axiosInstance.get(`/blog?page=${obj.selectedId}&page_size=${obj?.size}`, { signal: obj?.signal })
            return res.data?.results;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

// get all comments
export const getAllComments = createAsyncThunk(
    'get/getAllComments',
    async (obj) => {
        try {
            const res = await axiosInstance.get(`/otzif?page=${obj.selectedId}&page_size=${obj?.size}`, { signal: obj?.signal })
            return res.data?.results;
        } catch (error) {
            if (error.name) {
                // console.log('successfully aborted');
            } else {
                // handle error
                // console.log(error);
            }
        }
    }
)

const rootReducer = createSlice({
    name: "furcachmere",
    initialState: initState,
    reducers: {
        isLoading: (state, action) => {
            state.loading = action.payload;
        },
        isClearBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        isClearReviews: (state, action) => {
            state.comments = action.payload;
        },
    },
    // extra reducer
    extraReducers: (builder) => {
        builder
            .addCase(getBannerVideo.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getBannerVideo.fulfilled, (state, action) => {
                state.bannerVideo = action.payload;
                state.loading = false;
            })
            .addCase(getBannerVideo.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(getBannerImage.fulfilled, (state, action) => {
                state.bannerImage = action.payload;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.loading = true;
                state.categoryData = {};
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.categoryData = action.payload;
                state.loading = false;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(getAllColors.fulfilled, (state, action) => {
                state.colors = action.payload;
            })
            .addCase(getAllMaterials.fulfilled, (state, action) => {
                state.materials = action.payload;
            })
            .addCase(getAllSizes.fulfilled, (state, action) => {
                state.sizes = action.payload;
            })
            .addCase(getAllProductsWithSlug.fulfilled, (state, action) => {
                state.categoryData = action.payload;
            })
            .addCase(getAllFaqs.fulfilled, (state, action) => {
                state.faqs = action.payload;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.blogs = [...state.blogs, ...action.payload];
            })
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.comments = [...state.comments, ...action.payload];
            })
    }
});

export const { isLoading, isClearBlogs, isClearReviews } = rootReducer.actions;
export default rootReducer;