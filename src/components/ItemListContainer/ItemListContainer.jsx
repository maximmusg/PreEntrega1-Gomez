import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      {greeting}
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
