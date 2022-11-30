import styled from '@emotion/styled';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Button = styled.button`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  border-color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
  }
`;
