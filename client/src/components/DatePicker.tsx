import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

const DatePicker = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start rounded-full text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {/* {date ? format(date, 'PPP') : <span>Pick a date</span>} */}
          {date ? format(date, 'MM/dd/yyyy') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto rounded-3xl p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
