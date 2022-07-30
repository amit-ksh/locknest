import { FC, MouseEventHandler } from 'react';
import {
  Address,
  BankAccount,
  Email,
  IDCard,
  Password,
  PaymentCard,
  SecureNotes,
} from './itemsTypes';

interface SaveItemFormPropsTypes {
  isOpen: boolean;
  onClose: Function;
}

export interface SavePasswordFormPropsTypes extends SaveItemFormPropsTypes {
  item: Password;
}

export interface SaveAddressFormPropsTypes extends SaveItemFormPropsTypes {
  item: Address;
}

export interface SaveBankAccountFormPropsTypes extends SaveItemFormPropsTypes {
  item: BankAccount;
}

export interface SaveEmailFormPropsTypes extends SaveItemFormPropsTypes {
  item: Email;
}

export interface SaveIDCardFormPropsTypes extends SaveItemFormPropsTypes {
  item: IDCard;
}

export interface SavePaymentCardFormPropsTypes extends SaveItemFormPropsTypes {
  item: PaymentCard;
}

export interface SaveSecureNotesFormPropsTypes extends SaveItemFormPropsTypes {
  item: PaymentCard;
}

export interface OpenFormButtonPropsTypes {
  item: {
    name: string;
    Form: FC<{
      isOpen: boolean;
      onClose: Function;
    }>;
  };
}

export interface InputBoxPropsTypes {
  label: string;
  type: string;
  placeholder: string;
  value: any;
  isRequired?: boolean;
  isInvalid?: boolean;
  helpers?: string[];
  onChange: any;
}

export interface ItemPropsTypes {
  item:
    | Password
    | SecureNotes
    | PaymentCard
    | BankAccount
    | Email
    | Address
    | IDCard;
  type: string;
  setItemData: Function;
  onOpen: Function;
  onClose: Function;
}

export interface ItemsPropsTypes {
  type: string;
  name: string;
  Form: FC<{
    isOpen: boolean;
    onClose: Function;
    item:
      | Password
      | SecureNotes
      | PaymentCard
      | BankAccount
      | Email
      | Address
      | IDCard
      | any;
  }>;
}

export interface ItemsLayoutPropsTypes {
  itemNames: Array<{
    name: string;
    Form: FC<{
      isOpen: boolean;
      onClose: Function;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard
        | any;
    }>;
  }>;
}

export interface MainHeaderLayoutPropsTypes {
  itemsList: Array<{
    name: string;
    Form: FC<{
      isOpen: boolean;
      onClose: Function;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard
        | any;
    }>;
  }>;
  onOpen: MouseEventHandler;
}

export interface MainlayoutPropsTypes {
  itemsList: Array<{
    name: string;
    Form: FC<{
      isOpen: boolean;
      onClose: Function;
      item:
        | Password
        | SecureNotes
        | PaymentCard
        | BankAccount
        | Email
        | Address
        | IDCard
        | any;
    }>;
  }>;
}

export interface SidebarPropsTypes {
  onClose: any;
  display?: {};
}
