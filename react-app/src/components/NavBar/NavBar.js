import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../auth/LoginFormModal";
import SignUpFormModal from "../auth/SignupFormModal";
import CreateProductModal from "../Product/CreateProduct";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./NavBar.css";

const NavBar = ({ loaded }) => {
  let currentUser;
  // const sessionUser = useSelector((state) => state.session.user);
  const sessionUser2 = useSelector((state) => state.session.user);
  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (<ProfileButton user={sessionUser} />)
  // } else {
  //   sessionLinks = (
  //     <div className="session-links flex center">
  //       <div className="loginModalBut"><LoginFormModal /></div>
  //       <div className="signupModalBut"><SignUpFormModal /></div>
  //     </div>
  //   );
  // }

  if (sessionUser2) currentUser = true;
  else currentUser = false;

  return (
    <nav>
      <div className="salmon-top"></div>
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
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
      </div>
      <div className="divLine"/>
    </nav>
  );
};

export default NavBar;
// WILL NEED TO IMPLEMENT PROFILE BUTTON TO SHOW LOGIN/SIGNUP IF NOT USER LOGGED IN
