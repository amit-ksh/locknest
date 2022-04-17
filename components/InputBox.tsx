import { FC, useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const InputBox: FC<{
  label: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
  isInvalid: boolean;
  isPassword?: boolean;
  helpers?: string[];
  onChange: any;
}> = ({
  label,
  type,
  placeholder,
  isRequired,
  isInvalid,
  isPassword = false,
  helpers = [],
  onChange,
}) => {
  const [show, setShow] = useState(false);
  const [showHelpers, setShowHelpers] = useState(false);
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        <Input
          color={isInvalid ? 'red.400' : 'brand.500'}
          type={show || !isPassword ? 'text' : type}
          placeholder={placeholder}
          isRequired={isRequired}
          isInvalid={isInvalid}
          onChange={onChange}
        />
        {isPassword && (
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              variant="primary"
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {helpers.length > 0 && (
        <Button
          variant="primary"
          h="1.75rem"
          size="sm"
          mt={2}
          onClick={() => setShowHelpers(!showHelpers)}
        >
          {showHelpers ? 'Hide Helpers' : 'Show Helpers'}
        </Button>
      )}

      {showHelpers &&
        helpers &&
        helpers.map((helper) => (
          <FormHelperText fontSize="md">{helper}</FormHelperText>
        ))}
    </FormControl>
  );
};

export default InputBox;
