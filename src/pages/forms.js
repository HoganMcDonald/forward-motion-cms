import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { blue, blue_light, black } from '../styles/theme';
import Layout from '../components/Layout';
import RightArrow from '../svgs/RightArrow';

const FormsContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  text-align: center;
  min-height: 100vh;
`;

const Forms = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 2rem;
`;

const Form = styled.div`
  border: solid 2px ${blue_light};
  min-height: 4rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  transition: border 150ms ease-out;
  padding: 1rem;

  &:hover {
    border-color: ${blue};
  }
`;

const DownloadLink = styled(RightArrow)`
  transform: rotate(90deg);
  border-right: solid 2px ${blue_light};
  margin: 0;
  margin-right: 1rem;
  min-height: 1.5rem;
  min-width: 25px;

  path {
    fill: ${blue_light};
  }

  &:hover {
    path {
      fill: ${blue};
    }
  }
`;

const FormDetails = styled.div`
  text-align: left;
`;

const FormName = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  color: ${blue_light};
  margin: 0;
  max-width: 300px;
  text-decoration: none;
`;

const FormLink = styled.a`
  color: ${black};
  text-decoration: none;
`;

export const FormPageTemplate = ({ forms = [] }) => {
  return (
    <FormsContainer>
      <Forms>
        {forms.map((form, i) => (
          <FormLink key={i} href={form.form} target="_blank">
            <Form>
              <DownloadLink />
              <FormDetails>
                <FormName>{form.name}</FormName>
                <Description>{form.description}</Description>
              </FormDetails>
            </Form>
          </FormLink>
        ))}
      </Forms>
    </FormsContainer>
  );
};

class FormsPage extends Component {
  render() {
    const { data } = this.props;
    const { frontmatter: form } = data.formPageData.edges[0].node;
    const {
      frontmatter: announcementBar
    } = data.announcementBarData.edges[0].node;
    let { frontmatter: navBar } = data.navbarData.edges[0].node;
    navBar = {
      ...navBar,
      menuItems: navBar.menuItems.filter(item => item.linkURL[0] !== '#')
    };
    const { frontmatter: footer } = data.footerData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle }
    } = form;

    return (
      <Layout
        announcementBar={announcementBar}
        navBar={navBar}
        footer={footer}
        showLogo={true}
      >
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <FormPageTemplate {...form} />
      </Layout>
    );
  }
}

export default FormsPage;

export const pageQuery = graphql`
  query FormPageQuery {
    formPageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "forms-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            seo {
              browserTitle
              title
              description
            }
            forms {
              name
              description
              file
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`;
