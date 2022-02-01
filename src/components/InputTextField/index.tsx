import React, { memo, FC, useMemo } from 'react';
import { Control, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { StyleProp, StyleSheet, Text, TextInput, View } from 'react-native';

type TextInputProps = TextInput['props'];
interface Props extends TextInputProps {
  label?: string;
  name: string;
  control: Control<FieldValues, object>;
  rules?: UseControllerProps['rules'];
  containerStyle?: StyleProp<any>;
  errorMessage?: string;
  hideLabel?: true;
  hideErrorLabel?: true;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },
  label: {
    fontSize: 16,
    paddingBottom: 8,
    paddingLeft: 3,
    fontWeight: '500',
  },
  inputField: {
    fontSize: 14,
    borderRadius: 10,
    padding: 10,
    height: 48,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.02,
    shadowRadius: 5,
    elevation: 15,
  },
  errorLabel: {
    fontSize: 12,
    color: '#ea4949',
    paddingLeft: 3,
    paddingTop: 5,
  },
});

export const InputTextField: FC<Props> = memo(
  ({
    label,
    name,
    control,
    rules,
    containerStyle,
    errorMessage,
    hideLabel,
    hideErrorLabel,
    ...restProps
  }) => {
    const { field, fieldState } = useController({
      control,
      defaultValue: '',
      name,
      rules,
    });

    const currentErrorMessage = useMemo(() => {
      if (errorMessage) {
        return errorMessage;
      }

      if (fieldState.error) {
        return fieldState.error.message;
      }

      return '';
    }, [errorMessage, fieldState.error]);

    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {!hideLabel && <Text style={styles.label}>{label}</Text>}
        <TextInput
          {...restProps}
          value={field.value}
          onChangeText={field.onChange}
          style={{
            ...styles.inputField,
            borderColor: currentErrorMessage !== '' ? '#ea4949' : '#e0e0e0',
          }}
        />
        {!hideErrorLabel && <Text style={styles.errorLabel}>{currentErrorMessage}</Text>}
      </View>
    );
  },
);

InputTextField.displayName = 'InputTextField';

export default InputTextField;
