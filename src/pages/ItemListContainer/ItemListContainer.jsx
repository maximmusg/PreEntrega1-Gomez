import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import ItemList from "../../components/ItemList/ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();
  const colorTheme = useContext(ThemeContext);

  const fetchData = () => {
    const db = getFirestore();
    const productsQuery = collection(db, "products");
    const querySnapshot = !id
      ? productsQuery
      : query(productsQuery, where("category", "==", id));

    getDocs(querySnapshot)
      .then((response) => {
        const products = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductList(products);
      })
      .catch((er) => {
        console.error("Error en la carga de los productos:", er);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        backgroundColor: colorTheme.theme === "light" ? "white" : "black",
      }}
      className="item__Container"
    >
      <ItemList productList={productList} />

      {/* <button onClick={upLoadToFirestore}>Upluad Data</button> */}
    </div>
  );
};

export default ItemListContainer;
