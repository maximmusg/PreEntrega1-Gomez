import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
// import { listaProductos } from "../../data";
import ItemList from "../../components/ItemList/ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  // addDoc,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();
  const colorTheme = useContext(ThemeContext);

  // const upLoadToFirestore = async () => {
  //   const db = getFirestore();

  //   const ordersCollection = collection(db, "products");

  //   const promises = listaProductos.map((product) => {
  //     const newProduct = {
  //       ...product,
  //       stock: 50,
  //     };
  //     return addDoc(ordersCollection, newProduct);
  //   });
  //   try {
  //     await Promise.all(promises);
  //     console.log("Todos los productos han sido agregados a Firestore");
  //   } catch (error) {
  //     console.log("Error al subir datos", error);
  //   }
  // };

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

      {/* <button onClick={upLoadToFirestore}>Agregar Productos a Firestore</button> */}
    </div>
  );
};

export default ItemListContainer;
