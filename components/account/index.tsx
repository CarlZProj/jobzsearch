import {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './account.styles';

const Account = () => {
  // TODO: pull data from AWS DYnamcoDB if it exists
  useEffect(() => {}, []);

  // TODO: for all user fields
  const [country, setCountry] = useState('');

  const onPress = () => {
    console.log('SUBMIT TO THE FIELDS UPDATE TO BACKEND');
  };

  return (
    <View>
      <View style={styles.fieldContainer}>
        <Text style={styles.textContainer}>Country</Text>
        <TextInput
          placeholder="Enter Your Country"
          onChangeText={setCountry}
          value={country}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.textContainer}>Country</Text>
        <TextInput
          placeholder="Enter Your Country"
          onChangeText={setCountry}
          value={country}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.textContainer}>Country</Text>
        <TextInput
          placeholder="Enter Your Country"
          onChangeText={setCountry}
          value={country}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={onPress}>
          <Text style={styles.submitText}>Set Fields</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
