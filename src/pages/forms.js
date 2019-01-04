import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { blue_light, light, black } from '../styles/theme';
import Layout from '../components/Layout';

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
  height: 4rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${light};
  }
`;

const FormName = styled.h2`
  margin: 0;
`;

const FormLink = styled.a`
  color: ${black};
`;

export const FormPageTemplate = ({ forms = [] }) => {
  return (
    <FormsContainer>
      <Forms>
        {forms.map(form => (
          <FormLink href={form.form} target="_blank">
            <Form>
              <FormName>{form.name}</FormName>
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
              form
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`;
