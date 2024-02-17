import { useContext } from "react";
import UserContext from "./UserContext";

const ItemDetails = ({ data }) => {
  const { Remove, Increase, Decrease } = useContext(UserContext);

  return (
    <>
      <div className="col-8 p-4">
        <div className="row">
          <div className="col-4">
            <img
              className="img-thumbnail"
              src={data.thumbnail}
              alt="Product's Thumbnail"
            />
          </div>
          <div className="col-8">
            <h2>{data.title}</h2>
            <figure>
              <blockquote className="blockquote">
                <p>{data.brand}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {data.description}
              </figcaption>
            </figure>
            <blockquote className="blockquote">
              <p>Rating: {data.rating}</p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-4 p-4">
        <div className="row mb-5">
          <div className="col-6 text-end">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                onClick={() => Decrease(data.id)}
              ></button>
              <button type="button" className="btn border-warning disabled">
                <span className="fw-bold">{data.quantity}</span>
              </button>
              <div className="btn-group dropup">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  onClick={() => Increase(data.id)}
                ></button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p className="lead fw-bold mt-1">${data.price}</p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p
              className="lead fw-bold text-danger btn btn-lg"
              onClick={() => Remove(data.id)}
            >
              REMOVE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
