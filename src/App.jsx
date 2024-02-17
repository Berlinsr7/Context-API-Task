import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import UserContext from "./UserContext";
import CartItem from "./CartItem";

function App() {
  const user = useContext(UserContext);
  
  return (
    <><div className="container">
      <div className="row">
        <div className="col  text-bg-dark">
          <h1 className="display-4 fw-bold text-center">CONTEXT API TASK</h1>
        </div>
      </div>
    </div>
      {user.products.map((ele) => (
        <CartItem key={ele.id} data={ele} />
      ))}
    </>
  );
}

export default App;
