import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { styled } from 'styled-components';

const options = ['Good', 'Neutral', 'Bad'];

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const button = e.currentTarget.textContent.toLowerCase();
    setState(prevState => ({
      ...prevState,
      [button]: prevState[button] + 1,
    }));
  };

  const total = state.good + state.neutral + state.bad;

  const positivePercentage = Math.ceil((state.good / total) * 100);

  return (
    <StyledWrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
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
