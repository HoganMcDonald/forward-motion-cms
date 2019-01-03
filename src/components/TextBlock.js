import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { withDevice } from '../utils/withMedia';
import Underline from './Underline';

const Wrapper = styled.section`
  max-width: 600px;
  margin: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 0;
`;

class TextBlock extends PureComponent {
  render() {
    const { title, content, children, device } = this.props;

    return (
      <Wrapper aria-label={title}>
        <h2>{title}</h2>
        {device === 'large' ? <Underline /> : children}
        <ReactMarkdown source={content} />
      </Wrapper>
    );
  }
}

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  ref: PropTypes.func
};

export default withDevice(TextBlock);
