import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { LoginEmailFormFieldNames, LoginEmailFormFields } from '../../types';
import { useFormWithDefaults } from '../../hooks/useFormWithDefaults';
import { useLoginMutation } from '../../hooks/useLoginMutation';
import { Form } from '../styled';

const fields: LoginEmailFormFieldNames[] = [`email`, `password`];

export function Login() {
  const {
    control,
    errors,
    formState: { isSubmitting },
    handleSubmit,
  } = useFormWithDefaults<LoginEmailFormFields>(fields);

  const { mutate, isLoading, toastComponent } = useLoginMutation();
  const handleFormSubmit: SubmitHandler<LoginEmailFormFields> = async (
    formParams,
  ) => {
    mutate(formParams);
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input type="email" {...control.register(`email`)} />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input type="password" {...control.register(`password`)} />
        </FormControl>
        <br />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Button variant="contained" color="primary" type="submit">
            Log in
          </Button>
        )}
      </Form>
      {toastComponent}
    </>
  );
}
