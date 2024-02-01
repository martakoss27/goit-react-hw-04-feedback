import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <StyledSection>
        <h2>{title}</h2>
        {children}
      </StyledSection>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const StyledSection = styled.section`
  text-align: center;
  width: 720px;
  margin-top: 10px;
  padding: 0 0 20px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
`;
