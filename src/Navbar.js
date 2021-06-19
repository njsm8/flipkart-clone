import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="optionitem">
        <span className="login option">Login</span>
        <span className="option">More</span>
        <ShoppingCart className="option"></ShoppingCart>
        <span className="option">Cart</span>
      </div>
    </div>
  );
}

export default Navbar;
