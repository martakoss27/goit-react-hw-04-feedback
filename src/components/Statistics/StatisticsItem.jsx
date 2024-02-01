//import { styled } from 'styled-components';

export default function StatisticsItem(props) {
  const { title, value } = props;
  return (
    <li>
      <p>
        {title}: {value}
      </p>
    </li>
  );
}
