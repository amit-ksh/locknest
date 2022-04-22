import { SearchIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label="search">
        <IconButton
          w="10%"
          bg="white"
          aria-label="Search"
          color="brand.500"
          _hover={{
            bg: 'brand.500',
            color: 'white',
          }}
          _focus={{
            bg: 'brand.500',
            color: 'white',
          }}
          icon={<SearchIcon />}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalBody>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon htmlFor="search" color="brand.400" />}
              />
              <Input id="search" type="text" placeholder="Search" />
            </InputGroup>{' '}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBar;
