import type {OfferCard, StateOffers} from '../../types/types-store';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { fetchOffersAction } from '../../services/thunk/fetch-offers';

const initialState: StateOffers = {
  similarOffers: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    addOfferList(state, action: PayloadAction<OfferCard[]>) {
      state.similarOffers = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.similarOffers = action.payload;
      });
  }
});

export {offersSlice};

