import { STATUS } from '@/utils/status'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '@/utils/apiURL'
import { wait } from '@/utils/wait'

const initialState = {
  data: [],
  status: STATUS.IDLE
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setCategories, setStatus } = categorySlice.actions
export default categorySlice.reducer

export const fetchProductsByCategory = (categoryName) => async (dispatch) => {
  dispatch(setStatus(STATUS.LOADING))
  
  try {
    const response = await axios.get(
      `${BASE_URL}products/?category_like=${categoryName}&_sort=id`
    )
    dispatch(setCategories(response.data))
    wait(1000).then(() => dispatch(setStatus(STATUS.IDLE)))
    
  } catch (error) {
    wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
  }
}
