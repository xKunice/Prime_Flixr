import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../button/Button";

function Header() {
  const buttonText = "Nuevo Video";
  const clase = ".btnheader";
  const location = useLocation();
  const showButton = location.pathname !== "/NuevoVideo/";

  return (
    <header>
      <Link to="/">
        <img src="../../../public/PrimeFlix.png" alt="Logo PrimeFlix" />
      </Link>
      {showButton && (
        <Link to="/NuevoVideo/">
          <Button clase="btnHeader" text={buttonText} />
        </Link>
      )}
    </header>
  );
}

export default Header;
