import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { UpdatePasswordFormFields, UpdatePasswordFormFieldNames } from '../../types';
import { useFormWithDefaults } from '../../hooks/useFormWithDefaults';
import { Form } from '../styled';
import { FormError } from '../FormError';
import { useResetPasswordMutation } from '@/hooks/useResetPasswordMutation';

const fields: UpdatePasswordFormFieldNames[] = [`email`, `password`, `token`];

export function ResetPassword() {
  const {
    control,
    errors,
    formState: { isSubmitting },
    handleSubmit,
  } = useFormWithDefaults<UpdatePasswordFormFields>(fields);

  const { mutate, isLoading, toastComponent } = useResetPasswordMutation();
  const handleFormSubmit: SubmitHandler<UpdatePasswordFormFields> = async (
    formParams,
  ) => {
    mutate(formParams);
  };

  return (
    <>
      <h1>Reset password</h1>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl margin="normal">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input type="email" {...control.register(`email`)} />
          <FormError message={errors?.password?.message} />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="token">Token</InputLabel>
          <Input type="token" {...control.register(`token`)} />
          <FormError message={errors?.password?.message} />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            {...control.register(`password`, { required: `enter a password` })}
          />
          <FormError message={errors?.password?.message} />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="passwordConfirmation">
            Password Confirmation
          </InputLabel>
          <Input
            type="password"
            {...control.register(`passwordConfirmation`)}
          />
          <FormError message={errors?.passwordConfirmation?.message} />
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
