export enum UserType {
  OWNER = `OWNER`,
  ADMIN = `ADMIN`,
  STANDARD = `STANDARD`,
  VIEWER = `VIEWER`,
}

export type NewUser = {
  type: UserType;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  pictureUrl?: string;
};

export type User = {
  id: number;
} & NewUser;

export type LoginEmailFormFields = Pick<NewUser, 'email' | 'password'>;
export type SignUpFormFields = Omit<NewUser, 'type' | 'pictureUrl'> & {
  passwordConfirmation: string;
};

export type AllFormFields = LoginEmailFormFields;

export type LoginEmailFormFieldNames = keyof LoginEmailFormFields;
export type SignUpFormFieldNames = keyof SignUpFormFields;

export type AllFormFieldNames = LoginEmailFormFieldNames | SignUpFormFieldNames;

export type Maybe<T> = T | null;
