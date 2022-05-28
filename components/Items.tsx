import { FC, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Spinner, useDisclosure } from '@chakra-ui/react';
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';

import Item from './Item';
import { ItemsPropsTypes } from '../lib/propsTypes';
import { StateModel } from '../lib/model';

const Items: FC<ItemsPropsTypes> = ({ type, name, Form }) => {
  const items = useStoreState((state: State<StateModel>) => state[name]);
  const searchFor = useStoreState(
    (state: State<StateModel>) => state.searchFor
  );
  const [itemData, setItemData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isHydrated = useStoreState(
    (state: State<StateModel>) => state.isHydrated
  );

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
