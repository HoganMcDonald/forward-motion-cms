import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import ReactMarkdown from 'react-markdown';

import { blue, blue_light, black, white, light } from '../styles/theme';

const FormContainer = styled.div`
  position: relative;
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: auto;
  box-sizing: content-box;
  background-color: white;
  border: solid 2px ${blue};
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: repeat(3, auto);

  @media (max-width: 999px) {
    grid-template-columns: auto;
  }
`;

const Form = styled.form`
  z-index: 1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;

  @media (min-width: 1000px) {
    border-right: solid 2px ${black};
  }
`;

const FormItem = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

const Input = styled.input`
  border: solid 1px ${blue};
  max-width: 600px;
  transition: box-shadow 150ms ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${blue_light};
  }
`;

const TextArea = styled.textarea`
  resize: none;
  border: solid 1px ${blue};
  transition: box-shadow 150ms ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${blue_light};
  }
`;

const Submit = styled.input`
  margin: 1rem 2rem;
  background-color: ${blue_light};
  border: none;
  padding: 4px 7px;
  color: ${white};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${blue};
  }
`;

const NameSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${blue_light};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  * {
    margin: 0;
  }
`;

const AddressSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${light};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  * {
    margin: 0;
  }
`;

const ContactSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  * {
    margin: 0;
  }
`;

class ContatForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onChange = e => {
    let { name, value } = e.target;

    if (name === 'message' && value.length > 255) {
      return;
    }

    this.setState({ [name]: value });
  };

  render() {
    const { name, address, contact } = this.props;

    return (
      <FormContainer>
        <Form netlify>
          <FormItem htmlFor="name">
            Name:
            <Input
              type="text"
              value={this.state.name}
              onChange={this.onChange}
              name="name"
            />
          </FormItem>
          <FormItem htmlFor="email">
            Email:
            <Input
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              name="email"
            />
          </FormItem>
          <FormItem htmlFor="phone">
            Phone:
            <InputMask
              mask="(999) 999-9999"
              onChange={this.onChange}
              maskChar=" "
            >
              {inputProps => <Input {...inputProps} type="tel" name="phone" />}
            </InputMask>
          </FormItem>
          <FormItem htmlFor="message">
            Message:
            <TextArea
              value={this.state.message}
              onChange={this.onChange}
              name="message"
            />
            <small>{this.state.message.length} of 255 characters used.</small>
          </FormItem>
          <Submit type="submit" value="submit" />
        </Form>
        <NameSection>
          <span>
            <ReactMarkdown source={name} />
          </span>
        </NameSection>
        <AddressSection>
          <span>
            <ReactMarkdown source={address} />
          </span>
        </AddressSection>
        <ContactSection>
          <span>
            <ReactMarkdown source={contact} />
          </span>
        </ContactSection>
      </FormContainer>
    );
  }
}

export default ContatForm;
