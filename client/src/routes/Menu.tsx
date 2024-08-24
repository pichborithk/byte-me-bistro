import { useEffect, useState } from "react";
import { Item } from "../types/Menu.types";
import axios from "axios";
import { ResponseForm } from "../types";
import { MenuItem } from "../components";

const Menu = () => {
  const [menu, setMenu] = useState<Item[]>([]);

  async function getMenu() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/items`);
      console.log(response);
      const result: ResponseForm<Item[]> = response.data;
      if (result.data && result.isSuccess) {
        setMenu(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl flex-wrap gap-6 px-24 py-40">
      {menu.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </div>
  );
};
export default Menu;
