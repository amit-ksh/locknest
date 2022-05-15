import fetcher from './fetcher';

export const auth = (mode: 'signin' | 'signup' | 'signout', body: {}) => {
  return fetcher(`/auth/${mode}`, body);
};
