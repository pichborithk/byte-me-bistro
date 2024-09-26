import { DatePicker, SelectTime } from '@/components';

const CreateReservation = () => {
  return (
    <div className='flex min-h-screen items-start justify-center py-40'>
      <div className='flex w-1/3 flex-col items-stretch justify-between gap-6 rounded-xl bg-secondary p-12 text-lg shadow-full'>
        CreateReservation
        <form action=''>
          <div className='relative flex gap-4'>
            <DatePicker />
          </div>
          <SelectTime />
        </form>
      </div>
    </div>
  );
};

export default CreateReservation;
