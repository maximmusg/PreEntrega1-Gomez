import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// import ItemCount from "../../components/ItemCount/ItemCount";
import { ThemeContext } from "../../context/ThemeContext";
import ItemList from "../../components/ItemList/ItemList";
import "./styles.css";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  };

  // Al siguiente codigo lo cambie para hacerlo de manera asincrona

  // const fetchProducts = () => {
  //   return fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  // };

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

  const colorTheme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: colorTheme.theme === "light" ? "white" : "black",
      }}
      className="item__Container"
    >
      {/* {greeting}  esto ya no va*/}
      {/* <ItemCount /> */}
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
