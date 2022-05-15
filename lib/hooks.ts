import useSWR from 'swr';
import fetcher from './fetcher';

export const usePasswords = () => {
  const { data, error } = useSWR('/items/password', fetcher);

  return {
    passwords: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useSecureNotes = () => {
  const { data, error } = useSWR('/items/secureNote', fetcher);

  return {
    secureNotes: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePaymentCards = () => {
  const { data, error } = useSWR('/items/paymentCard', fetcher);

  return {
    paymentCards: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useBankAccounts = () => {
  const { data, error } = useSWR('/items/bankAccount', fetcher);

  return {
    bankAccounts: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useEmails = () => {
  const { data, error } = useSWR('/items/email', fetcher);

  return {
    emails: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useAddresses = () => {
  const { data, error } = useSWR('/items/address', fetcher);

  return {
    addresses: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useIDCards = () => {
  const { data, error } = useSWR('/items/idCard', fetcher);

  return {
    IDCards: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
