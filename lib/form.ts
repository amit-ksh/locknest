export const createToast = (
  toast,
  title,
  description = '',
  status = 'success'
) => {
  toast({
    title,
    status,
    description,
    duration: 5000,
    isClosable: true,
    position: 'top',
  });
};

export const reset = (callbacks) => {
  callbacks.forEach((fn) => {
    fn('');
  });
};
