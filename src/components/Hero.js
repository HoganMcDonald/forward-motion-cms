import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeroSection = styled.section`
  z-index: 998;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 1000px) {
    height: 100vh;
    min-height: 700px;
  }
`;

const HeroImage = styled.img`
  margin: 0;
  z-index: -1;

  @media (min-width: 1000px) {
    position: absolute;
    bottom: 0;
    min-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media (max-width: 999px) {
    top: 0;
    bottom: 0;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 999px) {
    position: absolute;
    top: 0;
    height: 100%;
  }
`;

class Hero extends PureComponent {
  render() {
    const { imageSrc, imageAlt, children } = this.props;

    return (
      <HeroSection>
        <HeroImage src={imageSrc} alt={imageAlt} />
        <Content>{children}</Content>
      </HeroSection>
    );
  }
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

export default Hero;
