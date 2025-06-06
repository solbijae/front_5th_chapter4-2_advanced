import { Box, Checkbox } from '@chakra-ui/react';
import { memo } from 'react';

interface TimeSlotItemProps {
    id: number;
    label: string;
}

const TimeSlotItem = memo(({ id, label }: TimeSlotItemProps) => {
  return (
    <Box key={id}>
        <Checkbox 
            key={id} 
            size="sm" 
            value={id} 
            colorScheme="blue"
        >
        {id}교시({label})
        </Checkbox>
    </Box>
  )
});

export default TimeSlotItem;