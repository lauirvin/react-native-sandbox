import React, { memo, FC } from 'react';
import { Control, FieldValues, UseControllerProps, useFormState } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import InputTextField from '../InputTextField';

interface Props {
  label?: string;
  control: Control<FieldValues, object>;
  requiredFieldsErrorMessage: string;
  fields: {
    name: string;
    rules?: UseControllerProps['rules'];
    props?: TextInput['props'];
  }[];
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    paddingBottom: 10,
  },
});

export const AddressInputField: FC<Props> = memo(
  ({ label, control, fields, requiredFieldsErrorMessage }) => {
    const { errors } = useFormState({ control });

    /* ------------ Get relevant error fields from form state ------------ */
    const errorFields = fields.map((field) => errors[field.name]).filter((x) => x);

    /* ------------ Check if all required fields are filled ------------ */
    const isRequiredFieldsFilled =
      errorFields.map((x) => x.type === 'required').length ===
      fields.map((x) => x.rules?.required).filter((x) => x).length;

    /* ------- Return requiredFieldsErrorMessage if all required fields are not filled ------- */
    const errorMessage = isRequiredFieldsFilled
      ? requiredFieldsErrorMessage
      : errorFields[0]?.message;

    return (
      <>
        <InputTextField
          hideErrorLabel
          name={fields[0].name}
          label={label}
          control={control}
          containerStyle={styles.inputFieldContainer}
          rules={fields[0].rules}
          {...fields[0].props}
        />
        {fields.slice(1, fields.length - 1).map((field) => (
          <InputTextField
            hideErrorLabel
            hideLabel
            key={field.name}
            name={field.name}
            control={control}
            containerStyle={styles.inputFieldContainer}
            rules={field.rules}
            {...field.props}
          />
        ))}
        <InputTextField
          hideLabel
          name={fields[fields.length - 1].name}
          control={control}
          rules={fields[fields.length - 1].rules}
          errorMessage={errorMessage}
          {...fields[fields.length - 1].props}
        />
      </>
    );
  },
);

AddressInputField.displayName = 'AddressInputField';

export default AddressInputField;
