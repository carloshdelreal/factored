import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { SignUpFormFields, SignUpFormFieldNames } from '../../types';
import { useFormWithDefaults } from '../../hooks/useFormWithDefaults';
import { Form } from '../styled';
import { useSignUpMutation } from '../../hooks/useSignUpMutation';
import { FormError } from '../FormError';

const fields: SignUpFormFieldNames[] = [
  `email`,
  `password`,
  `passwordConfirmation`,
];

export function SignUp() {
  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = useFormWithDefaults<SignUpFormFields>(fields);

  const { mutate, isLoading, toastComponent } = useSignUpMutation();
  const handleFormSubmit: SubmitHandler<SignUpFormFields> = async (
    formParams,
  ) => {
    if (formParams.password !== formParams.passwordConfirmation) {
      setError(`passwordConfirmation`, {
        type: `custom`,
        message: `password and confirmation password do not match`,
      });
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirmation, ...params } = formParams;
    mutate(params);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl margin="normal">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            type="email"
            {...control.register(`email`, { required: `enter an email` })}
          />
          <FormError message={errors?.email?.message} />
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
            Create Account
          </Button>
        )}
      </Form>
      {toastComponent}
    </>
  );
}
