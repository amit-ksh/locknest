import { createStore, action, thunk, persist } from 'easy-peasy';
import fetcher from '../lib/fetcher';

const itemNames = {
  password: 'passwords',
  securenotes: 'secureNotes',
  paymentcard: 'paymentCards',
  bankaccount: 'bankAccounts',
  email: 'emails',
  address: 'addresses',
  idcard: 'idCards',
};

export const store = createStore(
  persist({
    user: null,
    passwords: [],
    secureNotes: [],
    paymentCards: [],
    bankAccounts: [],
    emails: [],
    addresses: [],
    idCards: [],
    isHydrated: false,

    setUser: action((state: any, payload) => {
      state.user = payload.user;
    }),

    setIsHydrated: action((state: any, payload) => {
      state.isHydrated = payload.isHydrated;
    }),

    hydrateItemsHelper: action((state: any, payload: any) => {
      const { name, entries } = payload;

      state[name] = entries;
    }),

    hydrateItems: thunk(async (actions: any, _, helpers: any) => {
      if (helpers.getState().isHydrated) return;

      try {
        const items = await fetcher('items', {});

        for (const name in items) {
          actions.hydrateItemsHelper({ name, entries: items[name] });
        }

        actions.setIsHydrated({ isHydrated: true });
      } catch (e) {
        console.log(e.message);
        actions.setIsHydrated({ isHydrated: false });
      }
    }),

    getItems: thunk((_, payload: any, helpers) => {
      const name = payload.toLowerCase().split(' ').join('');
      const state = helpers.getState();

      return state[itemNames[name]];
    }),

    saveItem: thunk((actions: any, payload: any) => {
      const { actionName } = payload;

      if (actionName === 'ADD_ITEM') actions.addItem(payload);
      else actions.modifyItem(payload);
    }),

    addItem: action((state: any, payload) => {
      const { itemName, item } = payload;
      const name = itemNames[itemName.toLowerCase()];
      state[name].push(item);
    }),

    modifyItem: action((state: any, payload) => {
      const { itemName, item } = payload;
      const name = itemNames[itemName.toLowerCase()];

      state[name] = state[name].map((_item) =>
        item.id !== _item.id ? _item : item
      );
    }),

    deleteItem: action((state: any, payload) => {
      const { itemName, item } = payload;
      const name = itemNames[itemName.toLowerCase()];

      state[name] = state[name].filter(
        (_item) => item.id !== _item.id && _item
      );
    }),

    resetItems: action((state: any) => {
      for (const name in itemNames) {
        state[itemNames[name]] = [];
      }
    }),

    resetStore: thunk((actions: any) => {
      actions.setUser({ user: null });
      actions.resetItems();
      actions.setIsHydrated({ isHydrated: false });
    }),
  })
);
