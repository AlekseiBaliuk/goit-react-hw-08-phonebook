import styled from '@emotion/styled';

export const ContactListLi = styled.li`
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const ContactListText = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;
