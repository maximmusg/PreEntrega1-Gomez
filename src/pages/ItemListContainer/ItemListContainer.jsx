import { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="item__Container">
      {greeting}
      <ItemCount />
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
