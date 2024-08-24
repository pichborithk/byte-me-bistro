import { Item } from "../types/Menu.types";

type Props = {
  item: Item;
};

const MenuItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-2 shadow-full">
      <img
        src="https://i.insider.com/5bd2234bdde867488579161f?width=700"
        alt="burger"
        className="w-50 h-40"
      />
      <div>
        <p className="text-xl">{item.name}</p>
        <p className="font-gilroyLight font-bold">{item.category}</p>
        <p className="font-jura">{item.price}$</p>
      </div>
    </div>
  );
};
export default MenuItem;
