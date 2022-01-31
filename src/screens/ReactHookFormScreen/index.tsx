import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import InputTextField from '../../components/InputTextField';
import emailRegex from '../../utils/emailRegex';
import CTAButton from '../../components/CTAButton';
import AddressInputField from '../../components/AddressInputField';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  ctaButton: {
    marginTop: 20,
  },
});

const ReactHookFormScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <InputTextField
        label="First name"
        name="firstName"
        control={control}
        rules={{ required: { value: true, message: 'First name is required' } }}
      />
      <InputTextField
        label="Last name"
        name="lastName"
        control={control}
        rules={{ required: { value: true, message: 'Last name is required' } }}
      />
      <InputTextField
        label="Email address"
        name="emailAddress"
        control={control}
        rules={{
          required: { value: true, message: 'Email address is required' },
          pattern: {
            value: emailRegex,
            message: 'Invalid email address',
          },
        }}
      />
      <AddressInputField
        label="Address"
        control={control}
        requiredFieldsErrorMessage="Address is required"
        fields={[
          {
            name: 'address1',
            rules: { required: { value: true, message: 'Address Line 1 is required' } },
          },
          {
            name: 'address2',
            rules: { required: { value: true, message: 'Address Line 2 is required' } },
          },
          {
            name: 'address3',
            // rules: { required: { value: true, message: 'Address Line 3 is required' } },
          },
        ]}
      />
      <CTAButton style={styles.ctaButton} label="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ReactHookFormScreen;
