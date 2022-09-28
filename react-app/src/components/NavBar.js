import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./auth/LoginFormModal";
import SignUpFormModal from "./auth/SignupFormModal";
import CreateProductModal from "./Product/CreateProduct"
import ProfileButton from "./ProfileButton/ProfileButton";
import "./NavBar.css";

const NavBar = ({ loaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  let currentUser;
  const sessionUser2 = useSelector((state) => state.session.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="session-links flex center">
        <div className="loginModalBut"><LoginFormModal /></div>
        <div className="signupModalBut"><SignUpFormModal /></div>
      </div>
    );
  }

  if (sessionUser2) currentUser = true;
  else currentUser = false;

  return (
    <nav>
      <ul>
        <li>
        <NavLink
            className="home-button"
            to="/"
            exact={true}
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <div className="flex pr20">
        {currentUser && <CreateProductModal />}
          {loaded && sessionLinks}
        </div>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
// WILL NEED TO IMPLEMENT PROFILE BUTTON TO SHOW LOGIN/SIGNUP IF NOT USER LOGGED IN
