import { createStore, persist } from 'easy-peasy';
import model from './model';

export const store = createStore(persist(model));
