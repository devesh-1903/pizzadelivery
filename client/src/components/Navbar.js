import React from "react";
import { logoutUser } from "../actions/userActions";
import {
  Button,
  ButtonGroup,
  DropdownButton,
  MenuItem,
  Dropdown,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          PIMZZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <i style={{ color: "black" }} className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <DropdownButton
                id="dropdown-basic-button"
                title={currentUser.name}
                
              >
                
                <Dropdown.Item href="/orders">Orders</Dropdown.Item>

                <Dropdown.Item href="#/action-3" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
              </DropdownButton>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
