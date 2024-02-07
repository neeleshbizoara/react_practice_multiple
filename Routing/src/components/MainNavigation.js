import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const activeLinkStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              activeStyle={activeLinkStyle}
            >
              Home
            </NavLink>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              activeStyle={activeLinkStyle}
            //   style={isActive => ({
            //     color: isActive ? "green" : "blue"
            //   })}
            >
              Product
            </NavLink>
            {/* <Link to="/products">Product</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
