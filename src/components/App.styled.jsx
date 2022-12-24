import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const EnterLabel = styled.label`
  width: 100%;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;
export const EnterInput = styled.input`
  width: 100%;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const StyledButton = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.none};
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
