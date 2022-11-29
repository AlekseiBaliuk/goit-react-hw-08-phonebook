import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  padding: ${p => p.theme.space[4]}px;
`;

export const Info = styled.p`
  text-align: center;
`;
