// CustomDropdown.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {icons} from '../../constants';
import styles from './dropdown.styles';
import {useAuthenticator} from '@aws-amplify/ui-react-native';

const dropdownOptions = [
  {label: 'Option 1', value: 'option1'},
  {label: 'Option 2', value: 'option2'},
  {label: 'Sign Out', value: 'signOut'},
];

const userSelector = (context: any) => [context.user];

const Dropdown = () => {
  const {signOut} = useAuthenticator(userSelector);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = (callback: any) => {
    const sup = callback(selectedValue);

    console.log('HI', sup);
    // setSelectedValue(value);
    // console.log('HI', value);
    // // onSelect(value);

    if (sup === 'signOut') {
      console.log('sign out');
      signOut();
    }

    handleClose();
  };

  return (
    <View>
      <DropDownPicker
        open={isOpen}
        value={selectedValue}
        items={dropdownOptions}
        setOpen={handleOpen}
        setValue={handleSelect}
        onClose={handleClose}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdownStyle}
        textStyle={styles.dropdownTextStyle}
        placeholder={<Image source={icons.menu} style={styles.logo} />}
      />
    </View>
  );
};

export default Dropdown;
