import { action, reducer, thunk } from 'easy-peasy';
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

const model = {
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

  hydrateStoreHelper: action((state: any, payload: any) => {
    for (const name in payload) {
      state[name] = payload[name];
    }
  }),

  hydrateStore: thunk(async (actions: any, _, helpers: any) => {
    if (helpers.getState().isHydrated) return;

    try {
      const items = await fetcher('items', {});

      actions.hydrateStoreHelper(items);
      actions.setIsHydrated({ isHydrated: true });
    } catch (e) {
      console.log(e.message);
      actions.setIsHydrated({ isHydrated: false });
    }
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

    console.log(item);

    state[name] = state[name].map((_item) =>
      item.id !== _item.id ? _item : item
    );

    console.log(state[name]);
  }),

  deleteItem: action((state: any, payload) => {
    const { itemName, item } = payload;
    const name = itemNames[itemName.toLowerCase()];

    state[name] = state[name].filter((_item) => item.id !== _item.id && _item);
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
};

export default model;
