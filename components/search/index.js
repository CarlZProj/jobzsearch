import {TouchableOpacity, TextInput, View, Image} from 'react-native';
import {icons} from '../../constants';
import {useState} from 'react';
import styles from './search.styles';

const Search = () => {
  const [text, setText] = useState('');

  const onPress = () => {
    console.log('SEARCH JSEARCH RAPID API');
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="search job keywords"
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity onPress={onPress}>
        <Image source={icons.search} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
