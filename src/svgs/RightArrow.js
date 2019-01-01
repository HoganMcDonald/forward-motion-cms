import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { white } from '../styles/theme';

const Arrow = styled.svg`
  height: 1rem;
  margin-left: 1rem;
`;

class RightArrow extends PureComponent {
  render() {
    return (
      <Arrow
        xmlns="http://www.w3.org/2000/svg"
        viewBox="495.791 591.202 18.259 17.796"
      >
        <g id="arrow-right-solid" transform="translate(1293.791 442.202)">
          <path
            id="arrow-right-solid-2"
            data-name="arrow-right-solid"
            style={{ fill: white }}
            d="M7.763,38.842l.9-.9a.974.974,0,0,1,1.381,0l7.922,7.918a.974.974,0,0,1,0,1.381l-7.922,7.922a.974.974,0,0,1-1.381,0l-.9-.9a.979.979,0,0,1,.016-1.4l4.911-4.678H.978A.976.976,0,0,1,0,47.2V45.9a.976.976,0,0,1,.978-.978H12.69L7.78,40.24A.972.972,0,0,1,7.763,38.842Z"
            transform="translate(-798 111.35)"
          />
        </g>
      </Arrow>
    );
  }
}

export default RightArrow;
