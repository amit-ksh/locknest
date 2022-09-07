import { createStore, persist, Store } from 'easy-peasy';

import { model, StoreModel } from './model';

export const store: Store<StoreModel> = createStore(persist(model));
