export interface User {
  id: number;
  email: string;
}

export interface Password {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  username: string;
  url: string;
  password: string;
  notes: string;
}

export interface SecureNotes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  notes: string;
}

export interface PaymentCard {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  holderName: string;
  cardName: string;
  cardNumber: string;
  CVV: string;
  expirationDate: string;
  notes: string;
}

export interface BankAccount {
  id: number;
  createdAt: Date;
  updatedAt: Date;
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
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  username: string;
  password: string;
  notes: string;
}

export interface Address {
  id: number;
  createdAt: Date;
  updatedAt: Date;
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
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  type: string;
  number: string;
  issueDate: string;
  expirationDate: string;
  country: string;
  placeOfIssue: string;
}
