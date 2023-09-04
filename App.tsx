import {View, Text, Image} from 'react-native';

import {
  Authenticator,
  ThemeProvider,
  useTheme,
} from '@aws-amplify/ui-react-native';
import {Amplify} from 'aws-amplify';
import awsmobile from './src/aws-exports';

import {Header} from './components';
import {icons} from './constants';

import styles from './App.styles';
import Search from './components/search';
import Account from './components/account';

Amplify.configure(awsmobile);

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={icons.logo} style={styles.logo} />
    </View>
  );
};

const theme = {
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '{colors.teal.10}',
          20: '{colors.teal.20}',
          40: '{colors.teal.40}',
          60: '{colors.teal.60}',
          80: '{colors.teal.80}',
          90: '{colors.teal.90}',
          100: '{colors.teal.100}',
        },
      },
    },
  },
};

const App = () => {
  const {
    tokens: {colors},
  } = useTheme();

  // TODO: Custom Sign In/Up Screems

  return (
    <ThemeProvider theme={theme}>
      <Authenticator.Provider>
        <Authenticator
          Container={props => (
            <Authenticator.Container
              {...props}
              style={{backgroundColor: colors.teal[20]}}
            />
          )}
          Header={Logo}>
          <View>
            <Header />
            <Text>Welcome CarlZ</Text>
            <Search />
            <Account />
          </View>
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
  );
};

export default App;
