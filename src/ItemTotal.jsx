import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const ItemTotal = ({ id }) => {
  const user = useContext(UserContext);
  var ind = user.products.map((prod)=> prod.id).indexOf(id);

  return (
    <>
      <div className="row mt-3 px-5">
        <div className="col">
          <p className="h3 fw-bold">TOTAL: </p>
        </div>
        <div className="col text-end me-5">
          <p className="h4 fw-bold me-4 px-3">${user.products[ind].price}</p>
          <p className="me-4 px-3 text-warning">
            Get Extra Discount with Credit Card
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemTotal;
