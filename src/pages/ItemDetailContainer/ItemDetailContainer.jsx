import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./styles.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(id);
  return <div>{id && <ItemDetail itemSelected={product} />}</div>;
};

export default ItemDetailContainer;
