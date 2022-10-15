import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 20px;

  background-color: #b993d6;
  border-radius: 50px;
  border: transparent;

  &:not(:last-child) {
    margin-right: 12px;
  }

  transition: transform 250ms linear;

  &:hover {
    color: white;
    background-color: #0078bd;

    transform: scale(1.1);
  }
`;
