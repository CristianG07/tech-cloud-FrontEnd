import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: false,
  isLoginOpen: false,
  isSingUpOpen: false,
  isLoginMobileOpen: false,
  isSingUpMobileOpen: false
}

const toggleSlice = createSlice({
  name: 'toggles',
  initialState,
  reducers: {
    setOpenSidebar(state, action) {
      state.isSidebarOpen = action.payload
    },
    setOpenLogin(state, action) {
      state.isLoginOpen = action.payload
    },
    setOpenSingUp(state, action) {
      state.isSingUpOpen = action.payload
    },
    setOpenLoginMobile(state, action) {
      state.isLoginMobileOpen = action.payload
    },
    setOpenSingUpMobile(state, action) {
      state.isSingUpMobileOpen = action.payload
    }
  }
})

export const {
  setOpenSidebar,
  setOpenLogin,
  setOpenSingUp,
  setOpenLoginMobile,
  setOpenSingUpMobile
} = toggleSlice.actions
export default toggleSlice.reducer
