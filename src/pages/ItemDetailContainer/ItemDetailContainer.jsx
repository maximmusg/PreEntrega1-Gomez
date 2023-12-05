import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./styles.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const colorTheme = useContext(ThemeContext);

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
  return (
    <div
      style={{
        color: colorTheme.theme === "light" ? "black" : "white",

        backgroundColor: colorTheme.theme === "light" ? "#D9AB9A" : "#302927",
      }}
      className="itemDetail"
    >
      {id && <ItemDetail itemSelected={product} />}
    </div>
  );
};

export default ItemDetailContainer;
