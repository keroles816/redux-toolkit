import MeubelLogo from "../assets/Icons/Meubel House_Logos-05.png";
import { Link } from "react-router-dom";
import Account from "../assets/Icons/Account.png";
import love from "../assets/Icons/love.png";
import search from "../assets/Icons/search.png";
import shopingcart from "../assets/Icons/shopingcart.png";
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
        className="flex justify-center items-center  gap-6
    
      "
      >
        <li>
          <Link to="/">
            <img src={Account} alt="Account" />
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <img src={love} alt="love" />
          </Link>
        </li>
        <li>
          <Link to="/About">
            <img src={search} alt="search" />
          </Link>
        </li>
        <li>
          <Link to="/Contat">
            <img src={shopingcart} alt="shopingcart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
