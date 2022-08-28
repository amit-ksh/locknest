import { FC, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  TagLeftIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { InputBoxPropsTypes } from '../lib/propsTypes';
import { InfoIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

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
  const placeholderFontColor = useColorModeValue('gray.400', 'gray.300');

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
          _placeholder={{
            color: placeholderFontColor
          }}
        />

        {/* PASSWORD SHOW AND HIDE BUTTON */}
        {type === 'password' && (
          <IconButton
            ml={1}
            variant="primary"
            aria-label={show ? "hide password" : "show password"}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
            onClick={() => setShow(!show)}
          />
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
                ml={4}
                fontSize="md"
              >
                <TagLeftIcon mt={1} boxSize='18px' as={InfoIcon} color='green.400' />
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
