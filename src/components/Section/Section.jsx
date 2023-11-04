import { styled } from 'styled-components';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};
const StyledSection = styled.section`
  text-align: center;
  width: 720px;
  margin-top: 10px;
  padding: 0 0 20px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
`;
