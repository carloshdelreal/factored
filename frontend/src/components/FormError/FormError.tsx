import styled from '@emotion/styled';

interface IFormError {
  message: string | null;
}

const ErrorText = styled.span`
  color: red;
  font-size: 0.5;
  padding: 3px;
`;

export const FormError = ({ message }: IFormError) => {
  if (!message) return null;

  return <ErrorText>{message}</ErrorText>;
};
