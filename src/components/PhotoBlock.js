import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { blue } from '../styles/theme';

const PhotoBlock = styled.div`
  max-width: 600px;
  margin: 2.4rem;
  margin-top: ${props => (props.side === 'right' ? '3rem' : '1rem')};
  margin-bottom: ${props => (props.side === 'left' ? '3rem' : '1rem')};
  display: flex;
  justify-content: ${props =>
    props.side === 'right' ? 'flex-end' : 'flex-start'};
  align-items: ${props => (props.side === 'right' ? 'end' : 'start')};
`;

const Wrapper = styled.div`
  width: calc(100% - 1.5rem);
  border: solid 2px ${blue};
  line-height: 0;
`;

const Img = styled.img`
  margin: 0;
  height: auto;
  transform: ${props =>
    props.side === 'right'
      ? 'translate(-1.5rem, -1.5rem)'
      : 'translate(1.5rem, 1.5rem)'};
`;

class Photo extends PureComponent {
  render() {
    const { imageSrc, imageAlt, side } = this.props;
    return (
      <PhotoBlock side={side}>
        <Wrapper side={side}>
          <Img src={imageSrc} alt={imageAlt} side={side} />
        </Wrapper>
      </PhotoBlock>
    );
  }
}

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  side: PropTypes.string
};

export default Photo;
