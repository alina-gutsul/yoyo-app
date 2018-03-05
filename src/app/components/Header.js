import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="br0" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>YOYO Cinema</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>
            <Link to='/films'>Film Search</Link>
          </NavItem>
          <NavItem>
            <Link to='/favourites'>Favourite Films</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
