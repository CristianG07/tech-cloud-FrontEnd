import { createSlice } from '@reduxjs/toolkit'
// utils
import { STATUS } from '@/utils/status'
import { BASE_URL } from '@/utils/apiURL'
import { wait } from '@/utils/wait'
// axios
import axios from 'axios'

const initialState = {
  data: [],
  status: STATUS.IDLE
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.data = payload
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer

export const fetchProducts = () => {
  return async function fetchProducts(dispatch) {
    dispatch(setStatus(STATUS.LOADING))
    try {
      const response = await axios.get(`${BASE_URL}products?_sort=id`)
      dispatch(setProducts(response.data))
      wait(1000).then(() => dispatch(setStatus(STATUS.IDLE)))
    } catch (error) {
      wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
    }
  }
}
