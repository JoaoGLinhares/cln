import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333333;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background-color: #28a745;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export const AltButton = styled(Button)`
  background-color: #007bff;
  margin-top: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LinkText = styled.p`
  margin-top: 15px;
  font-size: 14px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

export const SocialButton = styled(Button)`
  background-color: #6c757d;
  margin-top: 5px;

  &:hover {
    background-color: #5a6268;
  }
`;
