export enum UserType {
  OWNER = `OWNER`,
  ADMIN = `ADMIN`,
  STANDARD = `STANDARD`,
  VIEWER = `VIEWER`,
}

export enum NotificationType {
  Warning = `warning`,
  Error = `error`,
  Success = `success`,
  Info = `info`,
}

export enum ReportAction {
  report = `report`,
  close = `close`,
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
export type ResetPasswordFormFields = Pick<NewUser, 'email'>;
export type UpdatePasswordFormFields = LoginEmailFormFields & { token: string }
export type SignUpFormFields = Omit<NewUser, 'type' | 'pictureUrl'> & {
  passwordConfirmation: string;
};

export type AllFormFields = LoginEmailFormFields;

export type LoginEmailFormFieldNames = keyof LoginEmailFormFields;
export type SignUpFormFieldNames = keyof SignUpFormFields;
export type ResetPasswordFormFieldNames = keyof ResetPasswordFormFields;
export type UpdatePasswordFormFieldNames = keyof UpdatePasswordFormFields

export type AllFormFieldNames = LoginEmailFormFieldNames | SignUpFormFieldNames | UpdatePasswordFormFieldNames;

export type Maybe<T> = T | null;

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  detail: string;
};

