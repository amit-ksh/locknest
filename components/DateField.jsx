import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';

const DateField = ({ label, onChange }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Flex gap={6}>
        <Select placeholder="Month" onChange={onChange}>
          {Array(12)
            .fill(1)
            .map((_, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
        </Select>
        <Select placeholder="Year">
          {Array(30)
            .fill(1)
            .map((_, i) => (
              <option value={2022 + i}>{i + 2022}</option>
            ))}
        </Select>
      </Flex>
    </FormControl>
  );
};

export default DateField;
