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
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';

const InputBox: FC<{
  label: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isPassword?: boolean;
  helpers?: string[];
  onChange: any;
}> = ({
  label,
  type,
  placeholder,
  isRequired = false,
  isInvalid = false,
  isPassword = false,
  helpers = [],
  onChange,
}) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        <Input
          color={isInvalid ? 'red.400' : 'black'}
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
        <Box mt={2}>
          <Heading as="h5" size="md">
            Minimum requirements:
          </Heading>
          <SimpleGrid columns={2}>
            {helpers.map((helper) => (
              <FormHelperText fontSize="md">{helper}</FormHelperText>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </FormControl>
  );
};

export default InputBox;
