import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../auth/LoginFormModal";
import SignUpFormModal from "../auth/SignupFormModal";
import CreateProductModal from "../Product/CreateProduct";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./NavBar.css";

const NavBar = ({ loaded }) => {
  let currentUser;
  const sessionUser2 = useSelector((state) => state.session.user);

  if (sessionUser2) currentUser = true;
  else currentUser = false;

  return (
    <nav>
      <div className="salmon-top">
      <div className="navTitle">
        <Link to={`/products/6`} className="navTitle">
        Get our #1 Bestselling Wild Dew Treatment Essence while supplies last! Use code 'PearLotus' for 20% off!
        </Link>
        </div>
      </div>
      <div className="navbar-container">
        <div className="empty-div"></div>
        <div className="home-button">
          <NavLink
            to="/"
            exact={true}
            className="home-button"
            activeClassName="active"
          >
            𝖯𝖤𝖠𝖱 & 𝖫𝖮𝖳𝖴𝖲
          </NavLink>
        </div>
        <div className="navprofile-button">
          <div className="createProduct">
          {currentUser && <CreateProductModal />}
          </div>
          <div>
          {loaded && <ProfileButton user={sessionUser2} />}
          </div>
        </div>
      </div>
      <div className="divLineNav"/>
    </nav>
  );
};

export default NavBar;
// WILL NEED TO IMPLEMENT PROFILE BUTTON TO SHOW LOGIN/SIGNUP IF NOT USER LOGGED IN
