import { TextInput, StyleSheet } from 'react-native'

function RCTextInput (props) {
  return (
    <TextInput
      {...props} style={styles.textInput}
    />
  )
}
const styles = StyleSheet.create({
  textInput: {
    marginTop: 5,
    marginBottom: 5
  }
})
export default RCTextInput
