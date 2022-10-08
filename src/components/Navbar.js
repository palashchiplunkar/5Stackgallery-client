import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, NavLink } from "react-router-dom";
import "./navStyle.css";
import AuthModal from "./Auth-modal";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { ToastContainer, toast } from "react-toastify";
import UploadModal from "./UploadModal";
export default function Navigation({ component }) {
  const [show, setshow] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const logoutUser = () => {
    logout();
    setshow(true);
    notify();
  };
  const notify = () => {
    toast.success("Logout Suceessfull", {
      position: "top-center",
    });
  };
  return (
    <Navbar collapseOnSelect bg='dark' expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'>
          <span class='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Brand>
          <p className='heading'>5Stack</p>
          <p className='heading heading1'>Gallery</p>
        </Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto px-2'>
            <Nav.Link id={component == "Home" ? "nav-text-white" : "nav-text"}>
              <NavLink
                to='/'
                style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link id={component == "About" ? "nav-text-white" : "nav-text"}>
              <Link
                to='/about'
                style={{ textDecoration: "none", color: "inherit" }}>
                About us
              </Link>
            </Nav.Link>
            {user && <p className='user'>{user.email}</p>}
            {user && <UploadModal />}
            {user && (
              <Button variant='primary' onClick={logoutUser} className='auth'>
                Logout
              </Button>
            )}
            {!user && <AuthModal />}
            <ToastContainer />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
