import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/PlaceYourOrdersStyle'

export default class PlaceYourOrders extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text>PlaceYourOrders Component</Text>
      </View>
    )
  }
}
