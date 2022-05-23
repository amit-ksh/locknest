import { createStore, action, thunk } from 'easy-peasy';
import fetcher from '../lib/fetcher';

export const store = createStore({
  passwords: [],
  secureNotes: [],
  paymentCards: [],
  bankAccounts: [],
  emails: [],
  addresses: [],
  idCards: [],

  hydrateItemsHelper: action((state: any, payload) => {
    const { name, entries } = payload;
    state[name] = entries;
  }),

  hydrateItems: thunk(async (actions) => {
    try {
      const items = await fetcher('items', {});

      for (const key in items) {
        actions.hydrateItemsHelper({ name: key, entries: items[key] });
      }
    } catch (e) {
      console.log(e.message);
    }
  }),

  updateItem: action((state: any, payload) => {
    const { item } = payload;

    if (item.id) state.addItem(state, payload);
    else state.modifyItem(state, payload);
  }),

  addItem: action((state: any, payload) => {
    const { itemName, item } = payload;
    state[itemName].push(item);
  }),

  modifyItem: action((state: any, payload) => {
    const { itemName, item } = payload;

    state[itemName] = state[itemName].map((_item) =>
      item.id !== _item.id ? _item : item
    );
  }),

  deleteItem: action((state: any, payload) => {
    const { itemName, item } = payload;

    state[itemName] = state[itemName].filter(
      (_item) => item.id !== _item.id && _item
    );
  }),
});
