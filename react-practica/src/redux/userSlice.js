import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api/auth';

// Async thunk to handle login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await loginUser({ email, password });
      const { accessToken } = response;
      if (accessToken) {
        if (rememberMe) {
          localStorage.setItem('token', accessToken);
        }
        return accessToken;
      }
      return rejectWithValue(new Error('No access token received'));
    } catch (error) {
      return rejectWithValue(
        new Error(error.response?.data?.message || 'Login failed')
      );
    }
  }
);

// Slice for user session
const userSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = { token: action.payload };
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
