import { useEffect, useMemo } from 'react';
import { useForm, UseFormMethods, UseFormOptions } from 'react-hook-form';
import { AllFormFieldNames, AllFormFields } from '../types';

// For react-hooks-forms to work properly and prevent controlled to uncontrolled state errors, we need to initialize forms with their default values
export const allDefaultFormValues: Required<AllFormFields> = {
  email: ``,
  password: ``,
};

export function useFormWithDefaults<T extends Partial<AllFormFields>>(
  fieldNames: Partial<AllFormFieldNames>[],
  initialValues?: Partial<T>,
  mode: UseFormOptions['mode'] = `onBlur`,
): UseFormMethods<T> {
  // Use useMemo for referential equality in the useEffect dependency list - prevents render loop due to mergedValues being a new object each render
  const defaultValues: any = useMemo(() => {
    const mergedValues = {};
    fieldNames.forEach((fieldName) => {
      mergedValues[fieldName] =
        initialValues?.[fieldName] || allDefaultFormValues[fieldName];
    });
    return mergedValues;
  }, [fieldNames, initialValues]);

  const { reset, ...rest } = useForm<T>({ defaultValues, mode });

  useEffect(() => reset(defaultValues), [defaultValues, reset]);

  return { reset, ...rest };
}
