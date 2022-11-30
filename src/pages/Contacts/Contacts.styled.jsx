import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const PhonebookTitle = styled.h1`
  text-align: center;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
