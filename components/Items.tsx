import { useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Spinner, useDisclosure } from '@chakra-ui/react';
import { useStoreState } from 'easy-peasy';

import Item from './Item';

const Items = ({ type, name, Form }) => {
  const items = useStoreState((state) => state[name]);
  const [itemData, setItemData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isHydrated = useStoreState((state: any) => state.isHydrated);

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
      {items.map((item, idx) => (
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
