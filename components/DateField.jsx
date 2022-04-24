import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import { useState } from 'react';

const DateField = ({ label, handleMonthChange, handleYearChange }) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Flex gap={6}>
        <Select placeholder="Month" onChange={handleMonthChange}>
          {Array(12)
            .fill(1)
            .map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
        </Select>
        <Select placeholder="Year" onChange={handleYearChange}>
          {Array(30)
            .fill(1)
            .map((_, i) => (
              <option key={i} value={2022 + i}>
                {i + 2022}
              </option>
            ))}
        </Select>
      </Flex>
    </FormControl>
  );
};

export default DateField;
