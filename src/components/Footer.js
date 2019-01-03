import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import ContatForm from './ContatForm';
import { white, black } from '../styles/theme';

const FooterSection = styled.section``;

const FooterContainer = styled.footer`
  postion: relative;
  background-color: ${black};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 12rem;
  margin-top: -10rem;
`;

const Copyright = styled.p`
  margin: 0;
  color: ${white};
`;

const SocialLinks = styled.div``;

class Footer extends PureComponent {
  render() {
    const { socialUrls = [], copyrightHolder, contact } = this.props;

    return (
      <FooterSection>
        <ContatForm {...contact} />
        <FooterContainer>
          {!!socialUrls.length && (
            <SocialLinks>
              {socialUrls.map((social, i) => (
                <SocialIcon
                  key={i}
                  url={social.linkURL}
                  fgColor={white}
                  bgColor={'rgba(0,0,0,0)'}
                  style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    margin: '0.5rem'
                  }}
                  target="_blank"
                />
              ))}
            </SocialLinks>
          )}
          <Copyright>
            Copyright &copy; {new Date().getFullYear()} {copyrightHolder}
          </Copyright>
        </FooterContainer>
      </FooterSection>
    );
  }
}

export default Footer;
