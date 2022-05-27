export interface User {
  id: number | null;
  email: string;
}

export interface Password {
  id: number | null;
  name: string;
  username: string;
  url: string;
  password: string;
  notes: string;
}

export interface SecureNotes {
  id: number | null;
  name: string;
  notes: string;
}

export interface PaymentCard {
  id: number | null;
  name: string;
  holderName: string;
  cardName: string;
  cardNumber: string;
  CVV: string;
  expirationDate: string;
  notes: string;
}

export interface BankAccount {
  id: number | null;
  name: string;
  holderName: string;
  bankName: string;
  branchAddress: string;
  accountType: string;
  accountNo: string;
  pin: string;
  swiftCode: string;
  ibanCode: string;
  notes: string;
}

export interface Email {
  id: number | null;
  name: string;
  username: string;
  password: string;
}

export interface Address {
  id: number | null;
  name: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
}

export interface IDCard {
  id: number | null;
  name: string;
  type: string;
  number: string;
  issueDate: string;
  expirationDate: string;
  country: string;
  placeOfIssue: string;
}
