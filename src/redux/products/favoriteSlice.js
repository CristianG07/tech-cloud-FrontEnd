import { createSlice } from '@reduxjs/toolkit'

const loadFavoriteFromStorage = () => {
  let favorites = localStorage.getItem('favorites')

  if (favorites) {
    return JSON.parse(localStorage.getItem('favorites'))
  } else {
    return []
  }
}

const initialState = {
  favorites: loadFavoriteFromStorage()
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      const favoriteListItem = { ...payload }

      const exitingItemIndex = state.favorites.findIndex(
        (item) => item.id === payload.id
      )

      if (!exitingItemIndex >= 0) {
        state.favorites.push(favoriteListItem)
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
    },
    removeFavorite: (state, { payload }) => {
      const indexToRemove = state.favorites.findIndex(
        item => item.id === payload
      )

      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1)
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
    },
    removeAllFavorite: (state) => {
      state.favorites = []
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  }
})
export const { addFavorite, removeFavorite, removeAllFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
