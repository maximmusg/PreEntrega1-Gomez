import { useRef } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

const ItemCount = ({ stock, setCount, count }) => {
  const renderCount = useRef(0);
  renderCount.current++;

  const onAdd = () => {
    // if (count === stock) return;
    setCount(count + 1);
  };
  const onSub = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="count__container">
      <Button variant="outline-primary" className="btnCount" onClick={onSub}>
        -
      </Button>
      <h2>{count}</h2>
      {count === stock ? null : (
        <Button variant="outline-primary" className="btnCount" onClick={onAdd}>
          +
        </Button>
      )}
    </div>
  );
};

export default ItemCount;
