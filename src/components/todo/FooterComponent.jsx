import { AuthContext } from "./security/AuthContext";
import { useContext } from "react";

function FooterComponent() {
  const authContext = useContext(AuthContext);

  console.log(authContext.number);

  return (
    <div className="footer">
      <div className="container">Your Footer</div>
    </div>
  );
}

export default FooterComponent;
