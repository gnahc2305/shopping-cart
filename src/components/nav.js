import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Tienda</h3>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  