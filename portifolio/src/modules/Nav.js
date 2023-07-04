import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar {...args} className="navbar-dark bg-dark fixed-top">
        <NavbarBrand href="/">Jionaz Pagliari</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#main">Home</NavLink>
              <NavLink href="#projects">Projetos</NavLink>
              <NavLink href="#apipage">Quer ver uma API?</NavLink>
              <NavLink href="#contact">Contato</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Volte sempre</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;