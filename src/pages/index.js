import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Observer from 'react-intersection-observer';

import { withDevice } from '../utils/withMedia';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import GetStarted from '../components/GetStarted';
import Underline from '../components/Underline';
import Container from '../components/Container';
import TextBlock from '../components/TextBlock';
import Fees from '../components/Fees';
import Logo from '../svgs/Logo';
import PhotoBlock from '../components/PhotoBlock';

class HomePageTemplate extends Component {
  render() {
    const { home, setLogo, device } = this.props;
    let logoWidth;

    switch (device) {
      case 'large':
        logoWidth = '50%';
        break;
      case 'medium':
        logoWidth = '75%';
        break;
      default:
        logoWidth = '100%';
    }

    const sarahPhoto = <PhotoBlock {...home.sarah} side="right" />;

    const fitPhoto = <PhotoBlock {...home.fit} side="left" />;

    return (
      <>
        <Hero {...home.hero}>
          <Observer onChange={setLogo}>
            {({ ref }) => <Logo width={logoWidth} logoRef={ref} />}
          </Observer>
          {['medium', 'large'].includes(device) && (
            <GetStarted text={home.hero.getStarted} />
          )}
        </Hero>
        {['xsmall', 'small'].includes(device) && (
          <Container>
            <GetStarted
              text={home.hero.getStarted}
              onClick={() => console.log('clicked')}
            />
            <Underline width="100px" />
          </Container>
        )}
        <Container id="therapy">
          <TextBlock {...home.therapy} />
        </Container>
        <Fees {...home.fees} />
        <Container flexDirection="row" id="about">
          <TextBlock {...home.sarah}>{sarahPhoto}</TextBlock>
          {device === 'large' && sarahPhoto}
        </Container>
        <Container flexDirection="row" id="fit">
          {device === 'large' && fitPhoto}
          <TextBlock {...home.fit}>{fitPhoto}</TextBlock>
        </Container>
      </>
    );
  }
}

HomePageTemplate = withDevice(HomePageTemplate);

export { HomePageTemplate };

class HomePage extends React.Component {
  state = {
    showLogo: false
  };

  render() {
    const { data } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      frontmatter: announcementBar
    } = data.announcementBarData.edges[0].node;
    const { frontmatter: navBar } = data.navbarData.edges[0].node;
    const { frontmatter: footer } = data.footerData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle }
    } = home;

    return (
      <Layout
        announcementBar={announcementBar}
        navBar={navBar}
        footer={footer}
        showLogo={this.state.showLogo}
      >
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate
          home={home}
          setLogo={inView => this.setState({ showLogo: !inView })}
        />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default withDevice(HomePage);

export const pageQuery = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            seo {
              browserTitle
              title
              description
            }
            hero {
              imageSrc
              imageAlt
              getStarted
            }
            therapy {
              title
              content
            }
            fees {
              individual
              family
              insurranceHref
              insuranceMessage
            }
            sarah {
              title
              imageSrc
              imageAlt
              content
            }
            fit {
              title
              imageSrc
              imageAlt
              content
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`;
