import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: auto;
  margin-right: auto; */
  z-index: 99;
`;

export const Modal = styled.div`
position: relative;
  width: auto;
  padding: 24px;
  background-color: white;
`;
