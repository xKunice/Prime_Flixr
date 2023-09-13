import "./header.css"
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Header(props) {
  const { buttonText} = props;
  const location = useLocation();
  const showButton = location.pathname !== '/form/'

  return (
    <header>
      <Link to="/">
        <img src="../../../public/PrimeFlix.png" alt="Logo PrimeFlix" />
      </Link>
      {showButton && (
        <Link to="/form/">
          <button className="btnHeader">{buttonText}</button>
        </Link>
      )} 


    </header>
  );
}

export default Header;
