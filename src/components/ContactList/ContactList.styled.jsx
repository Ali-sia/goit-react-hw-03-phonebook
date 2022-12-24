import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: ${p => p.theme.space[3]}px;

  p {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
