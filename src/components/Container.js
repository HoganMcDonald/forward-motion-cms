import styled from 'styled-components';

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: auto;
  margin-top: 2rem;
  justify-content: ${props => props.justiyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'column'};

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export default Container;
