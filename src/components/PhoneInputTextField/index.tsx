import React, { memo, FC, useState, useRef, useCallback, useMemo } from 'react';
import { Control, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { StyleProp, StyleSheet, Text, TextInput, View } from 'react-native';
import PhoneInput, { CountriesListItem } from 'react-native-phone-input';

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
  countriesList: CountriesListItem[];
  invalidNumberMessage: string;
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

export const PhoneInputTextField: FC<Props> = memo(
  ({
    label,
    name,
    control,
    rules,
    containerStyle,
    errorMessage,
    hideLabel,
    hideErrorLabel,
    countriesList,
    invalidNumberMessage,
    ...restProps
  }) => {
    const [currentCountry, setCurrentCountry] = useState(countriesList[0]);

    const phone = useRef<PhoneInput | null>(null);

    const { field, fieldState } = useController({
      control,
      defaultValue: '',
      name,
      rules: {
        ...rules,
        validate: () => phone.current?.isValidNumber() || false,
      },
    });

    const currentErrorMessage = useMemo(() => {
      if (fieldState.error) {
        if (fieldState.error?.type === 'validate') {
          return invalidNumberMessage;
        }
        return errorMessage || fieldState.error.message;
      }
      return '';
    }, [errorMessage, fieldState.error, invalidNumberMessage]);

    const onSelectCountry = useCallback(
      (selectedCountry: string) => {
        const country = countriesList.find((x) => x.iso2 === selectedCountry);
        if (country) setCurrentCountry(country);
      },
      [countriesList],
    );

    const onChangePhoneNumber = useCallback(
      (phoneNumber: string) => {
        if (phone.current) {
          phone.current.setValue(phoneNumber);
          field.onChange(phoneNumber);
        }
      },
      [field],
    );

    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {!hideLabel && <Text style={styles.label}>{label}</Text>}
        <PhoneInput
          autoFormat
          allowZeroAfterCountryCode
          ref={(ref) => {
            phone.current = ref;
          }}
          onSelectCountry={onSelectCountry}
          initialCountry={currentCountry.iso2}
          countriesList={countriesList}
          style={{
            ...styles.inputField,
            borderColor: fieldState.error ? '#ea4949' : '#e0e0e0',
          }}
          initialValue={field.value}
          textProps={restProps}
          onChangePhoneNumber={onChangePhoneNumber}
        />
        {!hideErrorLabel && <Text style={styles.errorLabel}>{currentErrorMessage}</Text>}
      </View>
    );
  },
);

PhoneInputTextField.displayName = 'PhoneInputTextField';

export default PhoneInputTextField;
