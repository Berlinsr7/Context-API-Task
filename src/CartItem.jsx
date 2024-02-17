import React from "react";
import ItemDetails from "./ItemDetails";
import ItemSubTotal from "./ItemSubTotal";
import ItemTotal from "./ItemTotal";

const CartItem = ({ data }) => {
  return (
    <div className="container border border-black bg-body-secondary mb-2">
      <div className="row px-5">
        <ItemDetails data={data} />
        <ItemSubTotal id={data.id} />
        <ItemTotal id={data.id} />
      </div>
    </div>
  );
};

export default CartItem;
