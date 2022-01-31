import React, { memo, FC } from 'react';
import {
  Control, FieldValues, useController, UseControllerProps,
} from 'react-hook-form';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';

interface Props {
  label?: string;
  name: string;
  control: Control<FieldValues, object>;
  rules?: UseControllerProps['rules'];
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

export const InputTextField: FC<Props> = memo(({
  label, name, control, rules,
}) => {
  const { field, fieldState } = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={{ ...styles.inputField, borderColor: fieldState.error ? '#ea4949' : '#e0e0e0' }}
      />
      <Text style={styles.errorLabel}>{fieldState.error ? fieldState.error.message : ''}</Text>
    </View>
  );
});

InputTextField.displayName = 'InputTextField';

export default InputTextField;
