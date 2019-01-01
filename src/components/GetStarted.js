import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { blue, white, blue_light, blue_dark } from '../styles/theme';

import RightArrow from '../svgs/RightArrow';

const Button = styled.button`
  background-color: ${blue};
  border-radius: 999px;
  border: none;
  -webkit-appearance: none;
  font-style: italic;
  color: ${white};
  display: flex;
  margin-top: 2rem;
  align-items: center;
  padding: 0.25rem 1rem;
  transition: box-shadow 150ms ease-in, background-color 100ms ease-out;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 4px ${blue_light};
    outline: none;
  }

  &:hover {
    background-color: ${blue_dark};
  }
`;

class GetStarted extends PureComponent {
  render() {
    const { onClick, text } = this.props;
    return (
      <Button onClick={onClick}>
        {text}
        <RightArrow />
      </Button>
    );
  }
}

GetStarted.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GetStarted;
