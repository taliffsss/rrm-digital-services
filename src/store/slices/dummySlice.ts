import { createSlice } from '@reduxjs/toolkit'

const dummySlice = createSlice({
  name: 'dummy',
  initialState: {
    message: 'Hello from dummy reducer!',
  },
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload
    },
  },
})

export const { updateMessage } = dummySlice.actions
export default dummySlice.reducer
