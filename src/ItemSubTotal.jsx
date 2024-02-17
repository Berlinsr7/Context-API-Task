import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const ItemSubTotal = ({ id }) => {
  const user = useContext(UserContext);

  var ind = user.products.map((prod)=> prod.id).indexOf(id);
 
  return (
    <>
      <div className="row mt-3 px-5 py-4 border-3 border-top border-bottom border-secondary">
        <div className="col">
          <p className="lead fw-bold text-secondary">SUBTOTAL: </p>
          <p className="lead fw-bold text-secondary">SHIPPING: </p>
        </div>
        <div className="col text-end me-5">
          <p className="lead fw-bold me-4 px-3">
            {user.products[ind].price}
          </p>
          <p className="lead fw-bold me-4 px-3">FREE</p>
        </div>
      </div>
    </>
  );
};

export default ItemSubTotal;
