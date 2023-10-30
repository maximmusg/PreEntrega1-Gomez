import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./styles.css";

const ItemList = () => {
  const [productList, setProductList] = useState([]);
  const [productSelectedId, setProductSelectedId] = useState(1);

  const fetchProducts = () => {
    setTimeout(() => {
      fetch("https://6539b0efe3b530c8d9e89779.mockapi.io/products", {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProductList(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  const getProduct = () => {
    fetch(
      `https://6539b0efe3b530c8d9e89779.mockapi.io/products/${productSelectedId}`
    )
      .then((res) => res.json())
      .then((detail) => {
        console.log(detail);
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return productList.length === 0 ? (
    <Spinner animation="border" role="status" size="xl" className="spinner">
      <span className="visually-hidden ">Loading...</span>
    </Spinner>
  ) : (
    <div className="card__container">
      {productList.map(({ name, description, price, image, id }, index) => (
        <div
          key={index}
          onClick={() => {
            setProductSelectedId(id);
            getProduct();
          }}
        >
          <Item
            name={name}
            description={description}
            price={price}
            image={`${image}?id=${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
