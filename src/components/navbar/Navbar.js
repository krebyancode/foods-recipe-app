import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Krebyancode>"}</i>
        <span>Foods</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink as="a" href="https://github.com/krebyancode" target="_blank">
          Github
        </MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
