import { FC, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { InputBoxPropsTypes } from '../lib/propsTypes';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const InputBox: FC<InputBoxPropsTypes> = ({
  label,
  type,
  placeholder,
  value,
  isRequired = false,
  isInvalid = false,
  helpers = [],
  onChange,
}) => {
  const [show, setShow] = useState(false);

  const helperFontColor = useColorModeValue('black', 'white');

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <InputGroup
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Input
          color={isInvalid ? 'red.400' : 'brand.500'}
          type={show ? 'text' : type}
          placeholder={placeholder}
          value={value}
          isRequired={isRequired}
          isInvalid={isInvalid}
          onChange={onChange}
        />
        {type === 'password' && (
          <Box ml={1}>
            {show ? (
              <IconButton
                variant="primary"
                aria-label="show password"
                icon={<ViewIcon />}
                onClick={() => setShow(!show)}
              />
            ) : (
              <IconButton
                variant="primary"
                aria-label="hide password"
                icon={<ViewOffIcon />}
                onClick={() => setShow(!show)}
              />
            )}
          </Box>
        )}
      </InputGroup>

      {helpers.length > 0 && (
        <Box mt={2}>
          <Heading as="h5" size="md">
            Minimum requirements:
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }}>
            {helpers.map((helper, idx) => (
              <FormHelperText
                color={helperFontColor}
                key={`helper-${idx + 1}`}
                fontSize="md"
              >
                {helper}
              </FormHelperText>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </FormControl>
  );
};

export default InputBox;
