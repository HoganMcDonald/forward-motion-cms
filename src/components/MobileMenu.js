import React, { PureComponent } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import { blue, white } from "../styles/theme";

const Overlay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const linkStyles = css`
  text-decoration: none;
  color: ${white};
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const LinkTag = styled(Link)`
  ${linkStyles}
`;

const ExternalLink = styled.a`
  ${linkStyles}
  margin-bottom: 2rem;
`;

class MobileMenu extends PureComponent {
  render() {
    const { menuItems, onClick } = this.props;
    const doxyLink = {
      label: "Video Session",
      linkType: "external",
      linkURL: "https://doxy.me/forwardmotiontherapy"
    };
    return (
      <Overlay>
        {[doxyLink, ...menuItems].map((link, i) =>
          link.linkType === "internal" ? (
            <LinkTag key={i} to={link.linkURL} onClick={onClick}>
              {link.label}
            </LinkTag>
          ) : (
            <ExternalLink key={i} href={link.linkURL} target="_blank">
              {link.label}
            </ExternalLink>
          )
        )}
      </Overlay>
    );
  }
}

export default MobileMenu;
