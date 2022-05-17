import fetcher from './fetcher';

export const auth = (mode: 'signin' | 'signup' | 'signout', body: {}) => {
  return fetcher(`/auth/${mode}`, body);
};

export const itemCRUD = (mode: 'save' | 'delete', body: {}) => {
  return fetcher(`/items/${mode}`, body);
};
