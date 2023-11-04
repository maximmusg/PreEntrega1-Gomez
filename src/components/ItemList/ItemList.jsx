import Spinner from "react-bootstrap/Spinner";
// import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./styles.css";
import { Link } from "react-router-dom";

const ItemList = ({ productList }) => {
  // const [productList, setProductList] = useState([]);
  // const [productSelectedId, setProductSelectedId] = useState(1);

  // const fetchProducts = () => {
  //   setTimeout(() => {
  //     fetch("https://6539b0efe3b530c8d9e89779.mockapi.io/products", {
  //       method: "GET",
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setProductList(data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 2000);
  // };

  // const getProduct = () => {
  //   fetch(
  //     `https://6539b0efe3b530c8d9e89779.mockapi.io/products/${productSelectedId}`
  //   )
  //     .then((res) => res.json())
  //     .then((detail) => {
  //       console.log(detail);
  //     })
  //     .catch(() => {});
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  return productList.length === 0 ? (
    <Spinner animation="border" role="status" size="xl" className="spinner">
      <span className="visually-hidden ">Loading...</span>
    </Spinner>
  ) : (
    <div className="card__container">
      {productList.map(({ title, description, price, image, id }, index) => (
        <Link
          to={`item/` + id}
          key={id}
          onClick={() => {
            // setProductSelectedId(id);
            // getProduct();
          }}
        >
          <Item
            title={title}
            description={description}
            price={price}
            image={image}
            // image={`${image}?id=${index}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
