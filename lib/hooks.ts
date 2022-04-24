import useSWR from 'swr';
import fetcher from './fetcher';

export const usePassword = () => {
  const { data, error } = useSWR('/passwords', fetcher);

  return {
    passwords: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useSecureNotes = () => {
  const { data, error } = useSWR('/securenotes', fetcher);

  return {
    secureNotes: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePaymentCards = () => {
  const { data, error } = useSWR('/paymentcards', fetcher);

  return {
    paymentCards: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useBankAccounts = () => {
  const { data, error } = useSWR('/bankAccounts', fetcher);

  return {
    bankAccounts: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useEmails = () => {
  const { data, error } = useSWR('/emails', fetcher);

  return {
    emails: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useAddresses = () => {
  const { data, error } = useSWR('/addresses', fetcher);

  return {
    addresses: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useIDCards = () => {
  const { data, error } = useSWR('/idcards', fetcher);

  return {
    IDCards: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
