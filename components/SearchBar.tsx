import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Actions, useStoreActions } from 'easy-peasy';
import { FC } from 'react';
import { ActionModel } from '../lib/model';

const SearchBar: FC<{}> = () => {
  const setSearchFor = useStoreActions(
    (actions: Actions<ActionModel>) => actions.setSearchFor
  );

  return (
    <>
      <InputGroup>
        <InputLeftElement color="brand.500" children={<SearchIcon />} />
        <Input
          id="search"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchFor({ text: e.target.value })}
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
