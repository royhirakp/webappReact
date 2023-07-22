import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addItem, removeItem } from "../../features/cart/cart-slice";
const ProductCart = ({ item }) => {
  const [cartaddStatus, setCartAddStatus] = useState(false);
  // console.log(props);
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "8px",
        width: "250px",
        height: "250px",
        margin: "1px",
      }}
    >
      <p>{cartaddStatus ? <>added to cart</> : ""}</p>
      <button
        onClick={() => {
          console.log("working");
          dispatch(
            addItem({
              id: item._id,
              price: item.price,
              catagory: item.catagory,
              reqQty: 1,
            })
          );
          setCartAddStatus(true);
        }}
        style={{ margin: "5px" }}
      >
        Add to cart
      </button>

      <button onClick={() => dispatch(removeItem("12355"))}>remove</button>

      <p>Catagory: {item?.catagory}</p>
      <p>price: {item?.price}</p>
      <p>abalable qty:{item.Qty}</p>
      <img src="" alt="dato image " />
    </div>
  );
};

export default ProductCart;
