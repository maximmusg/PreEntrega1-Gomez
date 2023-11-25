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
    const fetchData = async () => {
      const db = getFirestore();
      const productsQuery = collection(db, "products");

      try {
        const querySnapshot = await getDocs(productsQuery);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(products);
        let filteredProducts;

        if (id) {
          const idFormatted = id.includes("-") ? id.replace("-", " ") : id;
          filteredProducts = products.filter(
            (product) => product.category === idFormatted
          );
        } else {
          filteredProducts = products;
        }

        setProductList(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
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
