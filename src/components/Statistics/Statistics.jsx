import { styled } from 'styled-components';
import { useFeedback } from 'hooks/FeedbackContext';
import StatisticsItem from './StatisticsItem';

export const Statistics = () => {
  const { good, neutral, bad, total, positiveFeedback, handleReset } =
    useFeedback();
  return (
    <StyledUl>
      <StatisticsItem title="Good" value={good} />
      <StatisticsItem title="Neutral" value={neutral} />
      <StatisticsItem title="Bad" value={bad} />
      <StatisticsItem title="Total" value={total} />
      <StatisticsItem title="Positive Feedback" value={positiveFeedback} />
      <StyledButton type="button" onClick={handleReset}>
        Reset
      </StyledButton>
    </StyledUl>
  );
};
const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #bf4f74;
`;
const StyledButton = styled.button`
  font-size: 16px;
  margin: 5px;
  padding: 5px 15px;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  color: #bf4f74;

  &:hover {
    cursor: pointer;
  }
`;
