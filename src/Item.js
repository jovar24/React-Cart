import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./store/actions/products";

const Item = props => {
  const dispatch = useDispatch();
  return (
    <div className="Item">
      <img src="https://source.unsplash.com/random" alt="img" />
      <div className="meta">
        <div className="top-level">
          <p>{props.name}</p>
          <p>${props.price}</p>
        </div>
        <p>{props.description}</p>
        <div className="button">
          {props.inCart ? (
            <button onClick={() => dispatch(removeFromCart(props.id))}>
              remove from cart
            </button>
          ) : (
            <button onClick={() => dispatch(addToCart(props.id))}>
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
