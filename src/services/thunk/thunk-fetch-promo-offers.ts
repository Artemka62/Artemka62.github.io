import {createAsyncThunk} from '@reduxjs/toolkit';
import { ApiRoute } from '../../src-const';
import { Thunk } from '../../types/types-service';
import { OfferPromo } from '../../types/types-store';

const fetchPromoOffersAction = createAsyncThunk<OfferPromo[], undefined, Thunk>(
  'promoOffers/fetch',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OfferPromo[]>(ApiRoute.OffersPromo);

    return data;
  },
);

export{fetchPromoOffersAction};
