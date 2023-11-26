import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./styles.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id);
    getDoc(querySnapshot)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(id);
  return <div>{id && <ItemDetail itemSelected={product} />}</div>;
};

export default ItemDetailContainer;
