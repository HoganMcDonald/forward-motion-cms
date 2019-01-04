import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { black, white } from '../styles/theme';
import { withDevice } from '../utils/withMedia';
import Container from './Container';

const Background = styled.section`
  background-color: ${black};
  padding-top: ;
`;

const FeeContainer = styled(Container)`
  align-items: baseline;
`;

const SectionHeadings = styled.div`
  margin: 1rem;
`;

const Heading = styled.h2`
  color: ${white};
  margin: 0;
`;

const SubHeading = styled.h3`
  color: ${white};
  font-style: italic;
  font-weight: 400;
`;

const FeeDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-column-gap: 4rem;
  margin-bottom: 2rem;
  padding-left: 4rem;

  @media (max-width: 999px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1px 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
    grid-row-gap: 1rem;
  }
`;

const InsurranceLink = styled.a`
  color: ${white};
`;

const ColumnSeparator = styled.span`
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 100%;
  height: 100%;
  background-color: ${white};

  @media (max-width: 767px) {
    grid-row: 2;
    grid-column: 1;
  }
`;

const FeeGroup = styled.div`
  @media (max-width: 767px) {
    &:nth-child(3) {
      margin-top: 1.666rem;
    }
  }
`;

const Fee = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;

  @media (max-width: 767px) {
    padding-bottom: 0;
  }
`;

const FeeType = styled.h3`
  color: ${white};
  margin: 0;
`;

const FeePrice = styled.h3`
  color: ${white};
  font-weight: 400;
  font-style: italic;
`;

class Fees extends PureComponent {
  render() {
    const { individual, family, insurranceHref } = this.props;

    return (
      <Background id="fees">
        <FeeContainer>
          <SectionHeadings>
            <Heading>Fees</Heading>
            <SubHeading>Typical Session is 50 mins</SubHeading>
          </SectionHeadings>
          <FeeDetails>
            <FeeGroup>
              <Fee>
                <FeeType>Insurrance</FeeType>
                <FeePrice>
                  Available through&nbsp;
                  <InsurranceLink
                    href={insurranceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CHANGE ME
                  </InsurranceLink>
                </FeePrice>
              </Fee>
              <Fee>
                <FeeType>Sliding Scale/Reduced Fee</FeeType>
                <FeePrice>Available</FeePrice>
              </Fee>
            </FeeGroup>
            <ColumnSeparator />
            <FeeGroup>
              <Fee>
                <FeeType>Couple/Family</FeeType>
                <FeePrice>{family}</FeePrice>
              </Fee>
              <Fee>
                <FeeType>Individual</FeeType>
                <FeePrice>{individual}</FeePrice>
              </Fee>
            </FeeGroup>
          </FeeDetails>
        </FeeContainer>
      </Background>
    );
  }
}

Fees.propTypes = {
  device: PropTypes.string.isRequired
};

export default withDevice(Fees);
