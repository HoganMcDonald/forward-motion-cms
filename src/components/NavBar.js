import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { withDevice } from '../utils/withMedia';
import { white, link, black } from '../styles/theme';
import MenuIcon from '../svgs/MenuIcon';
import CloseIcon from '../svgs/CloseIcon';
import MobileMenu from './MobileMenu';
import Logo from '../svgs/Logo';

const Nav = styled.nav`
  z-index: 999;
  position: fixed;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;

const LogoLink = styled(Link)`
  height: 100%;
`;

const LinkList = styled.ul`
  margin: 0;
  list-style: none;
  float: right;
  display: flex;
`;

const LinkItem = styled.li`
  margin: 0;
  margin-left: 2rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const linkStyles = `
  font-size: 1.2rem;
  text-decoration: none;
  color: ${black};
  transition: color 150ms ease-out;

  &:hover {
    color: ${link};
  }
`;

const LinkTag = styled(Link)`
  ${linkStyles}
`;

const A = styled(AnchorLink)`
  ${linkStyles}
`;

const MenuToggle = styled.button`
  z-index: 9999;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 150ms ease-out;
  cursor: pointer;
  color: ${props => (props.open ? white : black)}

  &:focus {
    color: ${link};
    outline: none;
  }
`;

class NavBar extends Component {
  state = {
    open: false
  };

  render() {
    const { menuItems = [], device, showLogo = true } = this.props;
    const { open } = this.state;

    return device === 'large' ? (
      <Nav>
        <LogoLink to={'/'}>{showLogo && <Logo />}</LogoLink>
        <LinkList>
          {menuItems.map((link, i) => (
            <LinkItem key={i}>
              {link.linkType === 'internal' ? (
                link.linkURL[0] === '#' ? (
                  <A href={link.linkURL}>{link.label}</A>
                ) : (
                  <LinkTag to={link.linkURL}>{link.label}</LinkTag>
                )
              ) : (
                <A href={link.linkURL}>{link.label}</A>
              )}
            </LinkItem>
          ))}
        </LinkList>
      </Nav>
    ) : (
      <>
        <MenuToggle open={open} onClick={() => this.setState({ open: !open })}>
          {open ? <CloseIcon size={2} /> : <MenuIcon size={2} />}
        </MenuToggle>
        {open && (
          <MobileMenu
            menuItems={menuItems}
            onClick={() => this.setState({ open: false })}
          />
        )}
      </>
    );
  }
}

NavBar.propTypes = {
  links: PropTypes.array,
  logoImage: PropTypes.object.isRequired
};

export default withDevice(NavBar);
