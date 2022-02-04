import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { CountriesListItem } from 'react-native-phone-input';
import {
  InputTextField,
  CTAButton,
  AddressInputField,
  PhoneInputTextField,
} from '../../components';
import emailRegex from '../../utils/emailRegex';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#f1f5f7',
    flex: 1,
    justifyContent: 'space-between',
  },
  ctaButton: {
    marginVertical: 12.5,
  },
});

const ReactHookFormScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    Alert.alert(JSON.stringify(data));
  };

  const countriesList: Readonly<CountriesListItem[]> = [
    {
      name: 'Hong Kong (香港)',
      iso2: 'hk',
      dialCode: '852',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Macau (澳門)',
      iso2: 'mo',
      dialCode: '853',
      priority: 1,
      areaCodes: null,
    },
    {
      name: 'China (中国)',
      iso2: 'cn',
      dialCode: '86',
      priority: 2,
      areaCodes: null,
    },
    {
      name: 'United Kingdom',
      iso2: 'gb',
      dialCode: '44',
      priority: 3,
      areaCodes: null,
    },
  ];

  return (
    <View style={styles.container}>
      <InputTextField
        label="First name"
        name="firstName"
        placeholder="John"
        control={control}
        rules={{ required: { value: true, message: 'First name is required' } }}
      />
      <InputTextField
        label="Last name"
        name="lastName"
        placeholder="Appleseed"
        control={control}
        rules={{ required: { value: true, message: 'Last name is required' } }}
      />
      <InputTextField
        label="Email address"
        name="emailAddress"
        control={control}
        placeholder="john.appleseed@email.com"
        keyboardType="email-address"
        rules={{
          required: { value: true, message: 'Email address is required' },
          pattern: {
            value: emailRegex,
            message: 'Invalid email address',
          },
        }}
      />
      <PhoneInputTextField
        label="Mobile No."
        name="mobileNo"
        control={control}
        placeholder="1234 1234"
        keyboardType="number-pad"
        countriesList={countriesList}
        invalidNumberMessage="Invalid mobile number"
        rules={{
          required: { value: true, message: 'Mobile No. is required' },
          pattern: {
            value: new RegExp(`^\\+(${countriesList.map((x) => x.dialCode).join('|')})`, 'g'), // Check if the phone number startsWith the country code
            message: 'Invalid country code',
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
            props: { placeholder: 'Address Line 1' },
          },
          {
            name: 'address2',
            rules: { required: { value: true, message: 'Address Line 2 is required' } },
            props: { placeholder: 'Address Line 2' },
          },
          {
            name: 'address3',
            props: { placeholder: 'Address Line 3' },

            /* ------- Disabled this field to demo selective required fields ------- */

            // rules: { required: { value: true, message: 'Address Line 3 is required' } },
          },
        ]}
      />
      <CTAButton style={styles.ctaButton} label="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ReactHookFormScreen;
