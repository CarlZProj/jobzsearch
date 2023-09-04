const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logoContainer: {justifyContent: 'center', alignItems: 'center'},
  logo: {resizeMode: 'contain', height: 100, width: 100, padding: 20},
});

export default styles;
