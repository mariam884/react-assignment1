import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav,NavDropdown, Container, Button, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSun } from "react-icons/fa";

const CustomNavbar = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
           {/* Logo */}
               <Navbar.Brand href="#">
                 <div className="d-flex align-items-center">
                 <a
          class="navbar-brand py-1 py-md-2 py-xl-1 me-2 me-sm-n4 me-md-n5 me-lg-0"
          href="index.html"
        >
          <span
            class="d-none d-sm-flex flex-shrink-0 text-danger rtl-flip me-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="34"
            >
              <path
                d="M34.5 16.894v10.731c0 3.506-2.869 6.375-6.375 6.375H17.5h-.85C7.725 33.575.5 26.138.5 17c0-9.35 7.65-17 17-17s17 7.544 17 16.894z"
                fill="currentColor"
              ></path>
              <g fill-rule="evenodd">
                <path
                  d="M17.5 13.258c-3.101 0-5.655 2.554-5.655 5.655s2.554 5.655 5.655 5.655 5.655-2.554 5.655-5.655-2.554-5.655-5.655-5.655zm-9.433 5.655c0-5.187 4.246-9.433 9.433-9.433s9.433 4.246 9.433 9.433a9.36 9.36 0 0 1-1.569 5.192l2.397 2.397a1.89 1.89 0 0 1 0 2.671 1.89 1.89 0 0 1-2.671 0l-2.397-2.397a9.36 9.36 0 0 1-5.192 1.569c-5.187 0-9.433-4.246-9.433-9.433z"
                  fill="#000"
                  fill-opacity=".05"
                ></path>
                <g fill="#fff">
                  <path
                    d="M17.394 10.153c-3.723 0-6.741 3.018-6.741 6.741s3.018 6.741 6.741 6.741 6.741-3.018 6.741-6.741-3.018-6.741-6.741-6.741zM7.347 16.894A10.05 10.05 0 0 1 17.394 6.847 10.05 10.05 0 0 1 27.44 16.894 10.05 10.05 0 0 1 17.394 26.94 10.05 10.05 0 0 1 7.347 16.894z"
                  ></path>
                  <path
                    d="M23.025 22.525c.645-.645 1.692-.645 2.337 0l3.188 3.188c.645.645.645 1.692 0 2.337s-1.692.645-2.337 0l-3.187-3.187c-.645-.646-.645-1.692 0-2.337z"
                  ></path>
                </g>
              </g>
              <path
                d="M23.662 14.663c2.112 0 3.825-1.713 3.825-3.825s-1.713-3.825-3.825-3.825-3.825 1.713-3.825 3.825 1.713 3.825 3.825 3.825z"
                fill="#fff"
              ></path>
              <path
                fill-rule="evenodd"
                d="M23.663 8.429a2.41 2.41 0 0 0-2.408 2.408 2.41 2.41 0 0 0 2.408 2.408 2.41 2.41 0 0 0 2.408-2.408 2.41 2.41 0 0 0-2.408-2.408zm-5.242 2.408c0-2.895 2.347-5.242 5.242-5.242s5.242 2.347 5.242 5.242-2.347 5.242-5.242 5.242-5.242-2.347-5.242-5.242z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </a>
                   <span className="ms-2 fw-bold text-dark">Finder</span>
                 </div>
               </Navbar.Brand>

        {/* Navbar Links */}
        <Nav className="ms-right">
            <NavDropdown title="Home" id="home-dropdown">
              <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Listings" id="listings-dropdown">
              <NavDropdown.Item href="#action/4.1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Option 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item href="#action/5.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">Register</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item href="#action/6.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/6.2">Contact</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#docs">Docs</Nav.Link>
            <Nav.Link href="#components">Components</Nav.Link>
          </Nav>

        {/* Right Side Icons */}
        <div className="d-flex align-items-center gap-3">
          <FaSun size={20} />
          <FaUser size={20} />

          {/* Cart Icon with Badge */}
          <div className="position-relative">
            <FaShoppingCart size={24} />
            {cartItems > 0 && (
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartItems}
              </Badge>
            )}
          </div>

          {/* Button to Add Items */}
          <Button variant="primary" onClick={() => setCartItems(cartItems + 1)}>
            Add to Cart
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
