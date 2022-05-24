import { createStore, action, thunk } from 'easy-peasy';
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

export const store = createStore({
  passwords: [],
  secureNotes: [],
  paymentCards: [],
  bankAccounts: [],
  emails: [],
  addresses: [],
  idCards: [],

  hydrateItemsHelper: action((state: any, payload: any) => {
    const { name, entries } = payload;
    state[name] = [];
    state[name].push(...entries);
  }),

  hydrateItems: thunk(async (actions: any) => {
    console.log('hyra');

    try {
      const items = await fetcher('items', {});

      for (const name in items) {
        actions.hydrateItemsHelper({ name, entries: items[name] });
      }
      console.log('end');
    } catch (e) {
      console.log(e.message);
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

    state[name] = state[name].map((_item) =>
      item.id !== _item.id ? _item : item
    );
  }),

  deleteItem: action((state: any, payload) => {
    const { itemName, item } = payload;
    const name = itemNames[itemName.toLowerCase()];

    state[name] = state[name].filter((_item) => item.id !== _item.id && _item);
  }),
});
