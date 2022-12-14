import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* min-width: 350px; */
  padding: 12px;

  @media (min-width: 480px) {
    align-items: center;
  }

  @media (min-width: 768px) {
    min-width: 350px;
  }
`;

export const Info = styled.p`
  text-align: center;
`;

export const TextInfo = styled.p`
  font-size: 16px;
  color: #1976d2;
  font-weight: 600;
  padding-top: 12px;
`;
