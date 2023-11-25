import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();
  const colorTheme = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = () => {
      const db = getFirestore();
      const productsQuery = collection(db, "products");

      getDocs(productsQuery)
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const idFormatted =
            id && id.includes("-") ? id.replace("-", " ") : id;
          const filteredProducts = id
            ? products.filter((product) => product.category === idFormatted)
            : products;

          setProductList(filteredProducts);
        })
        .catch((er) => {
          console.error("Error en la carga de los productos:", er);
        });
    };

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
    </div>
  );
};

export default ItemListContainer;
