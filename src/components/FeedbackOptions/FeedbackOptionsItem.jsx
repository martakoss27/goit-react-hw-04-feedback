import { useFeedback } from 'hooks/FeedbackContext';
import styled from 'styled-components';

export default function FeedbackOptionsItem(props) {
  const { option } = props;
  const { handleIncrement } = useFeedback();
  return (
    <li>
      <StyledButton type="button" name={option} onClick={handleIncrement}>
        {option}
      </StyledButton>
    </li>
  );
}
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
