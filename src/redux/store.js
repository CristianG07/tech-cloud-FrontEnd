import { configureStore } from '@reduxjs/toolkit'
// reducers
import productReducer from './products/productSlice'
import favoriteReducer from './products/favoriteSlice'
import categoryReducer from './products/categorySlice'
import brandReducer from './products/brandSlice'
import searchReducer from './products/searchSlice'
import cartReducer from './products/cartSlice'
import toggleReducer from './products/toggleSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favoriteReducer,
    category: categoryReducer,
    brand: brandReducer,
    search: searchReducer,
    cart: cartReducer,
    toggle: toggleReducer,
  }
})
