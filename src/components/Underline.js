import styled from 'styled-components';

import { black } from '../styles/theme';

const Underline = styled.hr`
  height: 2px;
  width: ${props => props.width || '180px'};
  background-color: ${props => props.color || black};
  border: none;
  display: block;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default Underline;
