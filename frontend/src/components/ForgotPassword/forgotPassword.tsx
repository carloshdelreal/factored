import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { ResetPasswordFormFields, ResetPasswordFormFieldNames } from '../../types';
import { useFormWithDefaults } from '../../hooks/useFormWithDefaults';
import { useForgotPasswordMutation } from '../../hooks';
import { Form } from '../styled';

const fields: ResetPasswordFormFieldNames[] = [`email`];

export function ForgotPassword() {
  const {
    control,
    errors,
    formState: { isSubmitting },
    handleSubmit,
  } = useFormWithDefaults<ResetPasswordFormFields>(fields);

  const { mutate, isLoading, toastComponent } = useForgotPasswordMutation();
  const handleFormSubmit: SubmitHandler<ResetPasswordFormFields> = async (
    formParams,
  ) => {
    mutate(formParams);
  };

  return (
    <>
      <h1>Forgot password</h1>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input type="email" {...control.register(`email`)} />
        </FormControl>
        <br />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Button variant="contained" color="primary" type="submit">
            Reset password
          </Button>
        )}
      </Form>
      {toastComponent}
    </>
  );
}
