import { FC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const InputBox: FC<{
  label: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
  onChange: any;
}> = ({ label, type, placeholder, isRequired, onChange }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        isRequired={isRequired}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default InputBox;
