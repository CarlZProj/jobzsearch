const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {resizeMode: 'contain', height: 50, width: 50, padding: 20},
});

export default styles;
