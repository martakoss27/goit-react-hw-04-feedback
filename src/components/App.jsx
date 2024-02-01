import React from 'react';
import { useFeedback } from 'hooks/FeedbackContext';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { styled } from 'styled-components';

export const App = () => {
  const total = useFeedback();

  return (
    <StyledWrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics></Statistics>
      </Section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: '100vh';
  font-size: 40px;
  color: '#010101';
`;
