import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../constants';
import styles from './header.styles';
import Dropdown from '../dropdown';

const userSelector = (context: any) => [context.user];

const SignOutButton = () => {
  const {user, signOut, route} = useAuthenticator(userSelector);

  console.log(route);
  console.log(user);
  return route === 'authenticated' && user && user.username ? (
    <Pressable onPress={signOut}>
      <Text>Hello, {user.username}! Click here to sign out!</Text>
    </Pressable>
  ) : (
    <Authenticator />
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={icons.carl} style={styles.logo} />
      <View style={styles.logoContainer}>
        <Image source={icons.logo} style={styles.logo} />
      </View>
      <Dropdown />
    </View>
  );
};

export default Header;
