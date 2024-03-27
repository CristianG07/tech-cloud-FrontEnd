import { STATUS } from '@/utils/status'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '@/utils/apiURL'
import { wait } from '@/utils/wait'

const initialState = {
  data: [],
  status: STATUS.IDLE
}

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.data = action.payload
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setBrand, setStatus } = brandSlice.actions
export default brandSlice.reducer

export const fetchProductsByBrands = (categoryName, brandName) => async (dispatch) => {
  dispatch(setStatus(STATUS.LOADING))
  
  try {
    const response = await axios.get(
      `${BASE_URL}products/?category_like=${categoryName}&brand_like=${brandName}&_sort=id`
    )
    dispatch(setBrand(response.data))
    wait(1000).then(() => dispatch(setStatus(STATUS.IDLE)))
    
  } catch (error) {
    wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
  }
}
