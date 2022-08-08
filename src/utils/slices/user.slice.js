import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged_in: false,
    user: {}
  },
  reducers: {
    login: (state, payload) => {
      state.logged_in = true
    },
    logout: (state, payload) => {
      state.logged_in = false
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer