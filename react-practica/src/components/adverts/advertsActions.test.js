// advertsActions.test.js

import { configureStore } from '@reduxjs/toolkit';
import advertsReducer, { fetchAdverts } from '../../redux/advertsSlice';
import { getAdverts } from '../../api/adverts';
import actionCaptureMiddleware, { getCapturedActions, clearCapturedActions } from '../../middlewares/actionCaptureMiddleware';

jest.mock('../../api/adverts');

describe('Adverts Actions', () => {
  afterEach(() => {
    clearCapturedActions();
    jest.clearAllMocks();
  });

  it('should create an action to fetch adverts', async () => {
    const adverts = [{ id: 1, name: 'Advert 1', price: 100 }];
    getAdverts.mockResolvedValue(adverts);

    const store = configureStore({
      reducer: {
        adverts: advertsReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionCaptureMiddleware),
    });

    const expectedActions = [
      {
        type: 'adverts/fetchAdverts/pending',
        meta: expect.any(Object),
        payload: undefined
      },
      {
        type: 'adverts/fetchAdverts/fulfilled',
        payload: adverts,
        meta: expect.any(Object),
      },
    ];

    await store.dispatch(fetchAdverts());
    const capturedActions = getCapturedActions();
    expect(capturedActions).toEqual(expectedActions);
  });
});
