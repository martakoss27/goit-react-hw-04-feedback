import React, { useState } from 'react';
import FeedbackOptionsItem from './FeedbackOptionsItem';

import { styled } from 'styled-components';

export function FeedbackOptions() {
  const [options] = useState(['good', 'neutral', 'bad']);
  return (
    <div>
      <StyledUl>
        {options.map(option => {
          return <FeedbackOptionsItem option={option} key={option} />;
        })}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  color: #bf4f74;
`;
