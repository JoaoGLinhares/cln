import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #10a37f;
    box-shadow: 0 0 5px rgba(16, 163, 127, 0.3);
  }
`;
