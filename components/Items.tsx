import { FC, useState } from 'react';
import { Box, Center, Divider, Text } from '@chakra-ui/layout';
import { Spinner, useColorMode, useDisclosure } from '@chakra-ui/react';
import { State, useStoreState } from 'easy-peasy';

import Item from './Item';
import { ItemsPropsTypes } from '../types/props';
import { StateModel } from '../store/model';

const Items: FC<ItemsPropsTypes> = ({ type, name, Form }) => {
  const items = useStoreState((state: State<StateModel>) => state[name]);
  const searchFor = useStoreState(
    (state: State<StateModel>) => state.searchFor
  );
  const isHydrated = useStoreState(
    (state: State<StateModel>) => state.isHydrated
  );

  const [itemData, setItemData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const getFilteredItems = (filterText) => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) && item
    );
  };

  const handleClose = () => {
    setItemData({});
    onClose();
  };

  if (!isHydrated) {
    return (
      <Box ml={4} mb={2}>
        <Spinner color="brand.400" size="lg" />
      </Box>
    );
  }

  if (items.length === 0) {
    return (
      <Center
        fontSize="xl"
        color={colorMode === 'light' ? 'gray.400' : 'whiteAlpha.400'}
      >
        <Divider ml="10%" />
        <Text mx={4}>Empty</Text>
        <Divider mr="10%" />
      </Center>
    );
  }

  return (
    <Box mb={4}>
      {/* Items */}
      {getFilteredItems(searchFor).map((item, idx) => (
        <Item
          key={`${item.name}${idx}`}
          item={item}
          type={type}
          setItemData={setItemData}
          onOpen={onOpen}
          onClose={onClose}
        />
      ))}

      {/* Form */}
      <Form isOpen={isOpen} onClose={() => handleClose()} item={itemData} />
    </Box>
  );
};

export default Items;
