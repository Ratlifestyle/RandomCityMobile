import { TextInput } from 'react-native'
import { styles } from '../../../styles/SignUpScreenStyles'

function RCTextInput (props) {
  return (
    <TextInput
      {...props} style={styles.textInput}
    />
  )
}

export default RCTextInput
