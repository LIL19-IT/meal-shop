import { NavLink } from "react-router-dom";
import './Header.css';

export function Header() {
  return (
    <div className="Header">
      <h1>Meals Shop</h1>
      <nav>
        <NavLink to='/'><i className="fa fa-home"></i> home</NavLink>
        <NavLink to='/about'><i className="fa fa-info-circle"></i> about</NavLink>
        <NavLink to='/contact'><i className="fa fa-envelope"></i> contact</NavLink>
      </nav>
    </div>
  )
};

