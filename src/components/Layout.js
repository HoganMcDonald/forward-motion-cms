import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { DeviceProvider, withDevice } from '../utils/withMedia';
import AnnouncementBar from './AnnouncementBar';
import NavBar from './NavBar';
import Footer from './Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 0 auto;
`;

const Background = withDevice(styled.div`
  z-index: 997;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  background-color: white;
  display: ${props => (props.device === 'large' ? 'block' : 'none')};
`);

class Layout extends PureComponent {
  render() {
    const { children, announcementBar, navBar, footer, showLogo } = this.props;
    return (
      <DeviceProvider>
        <Container>
          <AnnouncementBar wait={2000} {...announcementBar} />
          <NavBar {...navBar} showLogo={showLogo} />
          <Main>
            <Background />
            {children}
          </Main>
          <Footer {...footer} />
        </Container>
      </DeviceProvider>
    );
  }
}

export const query = graphql`
  fragment LayoutFragment on Query {
    announcementBarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "announcement-bar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            message
            linkURL
            disabled
          }
        }
      }
    }
    footerData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            socialUrls {
              linkURL
            }
            copyrightHolder
          }
        }
      }
    }
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default Layout;
