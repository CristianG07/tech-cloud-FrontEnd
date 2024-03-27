import { STATUS } from '@/utils/status'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '@/utils/apiURL'
import { wait } from '@/utils/wait'

const initialState = {
  data: [],
  status: STATUS.IDLE
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.data = action.payload
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setSearch, setStatus } = searchSlice.actions
export default searchSlice.reducer

export const fetchProductsBySearch = (searchName) => async (dispatch) => {
  dispatch(setStatus(STATUS.LOADING))
  
  try {
    const response = await axios.get(
      `${BASE_URL}products/?name_like=${searchName}&_sort=id`
    )
    dispatch(setSearch(response.data))
    wait(1000).then(() => dispatch(setStatus(STATUS.IDLE)))
    
  } catch (error) {
    wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
  }
}
