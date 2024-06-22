import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAdverts,
  getAdvertById,
  createAdvert,
  deleteAdvert,
  getTags,
} from '../api/adverts';

// Thunks asíncronos para adverts
export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async () => {
    const response = await getAdverts();
    return response;
  }
);

export const fetchAdvert = createAsyncThunk(
  'adverts/fetchAdvert',
  async (id) => {
    const response = await getAdvertById(id);
    return response;
  }
);

export const createNewAdvert = createAsyncThunk(
  'adverts/createNewAdvert',
  async (advertData) => {
    const response = await createAdvert(advertData);
    return response;
  }
);

export const getFilteredAdverts = (state, filter) => {
  return state.adverts.filter(advert => {
    const matchesName = advert.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesSale = filter.sale === 'todos' || advert.sale.toString() === filter.sale;
    const matchesPrice = (filter.priceMin === '' || advert.price >= parseInt(filter.priceMin)) &&
                         (filter.priceMax === '' || advert.price <= parseInt(filter.priceMax));
    const matchesTags = filter.selectedTags.every(tag => advert.tags.includes(tag.value));
    
    return matchesName && matchesSale && matchesPrice && matchesTags;
  });
};

export const removeAdvert = createAsyncThunk(
  'adverts/removeAdvert',
  async (id) => {
    await deleteAdvert(id);
    return id;
  }
);

export const fetchTags = createAsyncThunk('adverts/fetchTags', async () => {
  const response = await getTags();
  return response;
});

// Slice para adverts
const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    tags: [],
    adverts: [],
    advertDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAdvert.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdvert.fulfilled, (state, action) => {
        state.loading = false;
        state.advertDetail = action.payload;
      })
      .addCase(fetchAdvert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewAdvert.fulfilled, (state, action) => {
        state.adverts.push(action.payload);
      })
      .addCase(removeAdvert.fulfilled, (state, action) => {
        state.adverts = state.adverts.filter(
          (advert) => advert.id !== action.payload
        );
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
      });
  },
});

export default advertsSlice.reducer;
