import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 5,
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: "80%",
    height: 45,
    padding: 5
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  button: {
   marginLeft: 40  
  }
})

export default styles