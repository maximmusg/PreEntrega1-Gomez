import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      {greeting}
      <ItemCount />
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
