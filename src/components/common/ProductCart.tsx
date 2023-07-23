import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addItem, removeItem } from "../../features/cart/cart-slice";
const ProductCart = (props) => {
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
              id: props?.item?._id,
              price: props?.item.price,
              catagory: props?.item.catagory,
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

      <p>Catagory: {props?.item?.catagory}</p>
      <p>price: {props?.item?.price}</p>
      <p>abalable qty:{props?.item.Qty}</p>
      <img src="" alt="dato image " />
    </div>
  );
};

export default ProductCart;
