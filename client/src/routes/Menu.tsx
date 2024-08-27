// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../app/hooks';
// import { itemGetAll } from '../app/item/itemSlice';
import { useGetItemsQuery } from '../app/services/items';
import { MenuItem } from '../components';

const Menu = () => {
  // const menu = useAppSelector(state => state.item.data);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(itemGetAll());
  // }, []);

  const { data: response } = useGetItemsQuery();

  const menu = response?.data;

  return (
    <div className='mx-auto flex max-w-7xl flex-wrap gap-6 px-24 py-40'>
      {menu && menu.map((item, i) => <MenuItem key={i} item={item} />)}
    </div>
  );
};

export default Menu;
