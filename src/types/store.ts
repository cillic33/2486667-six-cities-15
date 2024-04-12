import {setupStore, store} from '@/store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof setupStore>
