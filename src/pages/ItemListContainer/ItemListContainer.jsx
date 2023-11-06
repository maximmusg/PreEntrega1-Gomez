import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import "./styles.css";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const myFunctionFilter = async () => {
    let productList;

    if (id) {
      const data = await fetchProducts();
      const idFormated = id.includes("-") ? id.replace("-", " ") : id;
      productList = data.filter((product) => product.category === idFormated);
    } else {
      productList = await fetchProducts();
    }

    setProductList(productList);
  };

  useEffect(() => {
    myFunctionFilter();
  }, [id]);

  return (
    <div className="item__Container">
      {/* {greeting}  esto ya no va*/}
      <ItemCount />
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
