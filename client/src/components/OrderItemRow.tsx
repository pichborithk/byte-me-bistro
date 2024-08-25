import { Item } from '../app/item/item.types';

type Props = {
  item: Item;
  quantity: number;
};

const OrderItemRow = ({ item, quantity }: Props) => {
  return (
    <>
      <td className='px-12 py-2'>{item.name}</td>
      <td className='px-12 py-2 text-center'>{item.category}</td>
      <td className='px-12 py-2 text-center'>{item.price}</td>
      <td className='px-12 py-2 text-right'>{quantity}</td>
    </>
  );
};

export default OrderItemRow;
