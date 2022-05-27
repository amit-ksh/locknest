import { Action, action, Thunk, thunk } from 'easy-peasy';
import fetcher from '../lib/fetcher';
import {
  Address,
  BankAccount,
  Email,
  IDCard,
  Password,
  PaymentCard,
  SecureNotes,
  User,
} from './itemsTypes';

const itemNames = {
  password: 'passwords',
  securenotes: 'secureNotes',
  paymentcard: 'paymentCards',
  bankaccount: 'bankAccounts',
  email: 'emails',
  address: 'addresses',
  idcard: 'idCards',
};

export interface UsersDataModel {
  passwords: Password[];
  secureNotes: SecureNotes[];
  paymentCards: PaymentCard[];
  bankAccounts: BankAccount[];
  emails: Email[];
  addresses: Address[];
  idCards: IDCard[];
}

export interface StateModel extends UsersDataModel {
  user: User | null;
  isHydrated: boolean;
}

export interface ActionModel extends StateModel {
  setUser: Action<StateModel, { user: User }>;
  setIsHydrated: Action<StateModel, { isHydrated: boolean }>;
  hydrateStoreHelper: Action<StateModel, UsersDataModel>;
  addItem: Action<
    StateModel,
    {
      itemName: string;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard;
    }
  >;
  modifyItem: Action<
    StateModel,
    {
      itemName: string;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard;
    }
  >;
  deleteItem: Action<
    StateModel,
    {
      itemName: string;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard;
    }
  >;
  resetItems: Action<StateModel>;
}

export interface StoreModel extends ActionModel {
  hydrateStore: Thunk<ActionModel, undefined, any>;
  saveItem: Thunk<
    ActionModel,
    {
      actionName: string;
      itemName: string;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard;
    }
  >;
  resetStore: Thunk<ActionModel>;
}

export const model: StoreModel = {
  user: null,
  passwords: [],
  secureNotes: [],
  paymentCards: [],
  bankAccounts: [],
  emails: [],
  addresses: [],
  idCards: [],
  isHydrated: false,

  hydrateStore: thunk(async (actions, _, helpers) => {
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

  resetStore: thunk((actions) => {
    actions.setUser({ user: null });
    actions.resetItems();
    actions.setIsHydrated({ isHydrated: false });
  }),

  setUser: action((state, payload) => {
    state.user = payload.user;
  }),

  setIsHydrated: action((state, payload) => {
    state.isHydrated = payload.isHydrated;
  }),

  hydrateStoreHelper: action((state, payload) => {
    for (const name in payload) {
      state[name] = payload[name];
    }
  }),

  saveItem: thunk((actions, payload) => {
    const { actionName } = payload;

    if (actionName === 'ADD_ITEM') actions.addItem(payload);
    else actions.modifyItem(payload);
  }),

  addItem: action((state, payload) => {
    const { itemName, item } = payload;
    const name = itemNames[itemName.toLowerCase()];
    state[name].push(item);
  }),

  modifyItem: action((state, payload) => {
    const { itemName, item } = payload;
    const name = itemNames[itemName.toLowerCase()];

    state[name] = state[name].map((_item) =>
      item.id !== _item.id ? _item : item
    );
  }),

  deleteItem: action((state, payload) => {
    const { itemName, item } = payload;
    const name = itemNames[itemName.toLowerCase()];

    state[name] = state[name].filter((_item) => item.id !== _item.id && _item);
  }),

  resetItems: action((state) => {
    for (const name in itemNames) {
      state[itemNames[name]] = [];
    }
  }),
};
