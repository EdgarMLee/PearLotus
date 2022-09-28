import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./auth/LoginFormModal";
import SignUpFormModal from "./auth/SignupFormModal";
import CreateBusinessModal from "./Business/CreateBusiness";
import ProfileButton from "./ProfileButton";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  let currentUser;
  const sessionUser2 = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  const history = useHistory();
  let sessionLinks;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
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
