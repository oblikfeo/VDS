import { configureStore } from '@reduxjs/toolkit';

import { applicationReducer } from './reducers';

export const store = configureStore({
  reducer: {
    app: applicationReducer,
  },
});
