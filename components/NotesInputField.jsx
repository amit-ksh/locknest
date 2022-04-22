import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';

const NotesInputField = ({ maxH, onChange }) => {
  return (
    <FormControl>
      <FormLabel htmlFor="notes" color="brand.500">
        Notes
      </FormLabel>
      <Textarea
        id="notes"
        resize="vertical"
        maxH={maxH}
        color="brand.500"
        borderWidth="2px"
        borderColor="brand.500"
        borderRadius="3px"
        _focus={{
          borderColor: 'brand.400',
        }}
        _hover={{
          borderColor: 'brand.400',
        }}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default NotesInputField;
