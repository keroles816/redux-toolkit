import MeubelLogo from "../assets/Icons/Meubel House_Logos-05.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-8 px-6">
      <div className="flex justify-center items-center gap-2">
        <img src={MeubelLogo} alt="home logo" />
        <h3 className="font-bold text-4xl font-montserrat">Furniro</h3>
      </div>

      <ul
        className="flex justify-center items-center  gap-[75px] font-poppins 
      font-semibold 
      "
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contat">Contact</Link>
        </li>
      </ul>

      <ul
        className="flex justify-center items-center  gap-[75px] font-poppins 
      font-semibold 
      "
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/About">p</Link>
        </li>
        <li>
          <Link to="/Contat">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
