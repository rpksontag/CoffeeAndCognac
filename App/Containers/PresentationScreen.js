import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
    componentExamples: PropTypes.func,
    usageExamples: PropTypes.func,
    apiTesting: PropTypes.func,
    theme: PropTypes.func,
    deviceInfo: PropTypes.func,
    jupiter: PropTypes.func,
    placeOrders: PropTypes.func 
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
             Welcome to The Barley and Bean.
            </Text>
            <Text style={styles.subtitle}>Purveyors of Fine Coffees and Craft Beers</Text>
          </View>


           <RoundedButton onPress={this.props.placeOrders}>
            Place Your Orders Screen
           </RoundedButton>

          <RoundedButton onPress={this.props.usageExamples}>
            Login/Sign Up
          </RoundedButton>

         

         

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made by The Fire Fetts and The Heavens</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentExamples: NavigationActions.componentExamples,
    usageExamples: NavigationActions.usageExamples,
    apiTesting: NavigationActions.apiTesting,
    theme: NavigationActions.theme,
    deviceInfo: NavigationActions.deviceInfo,
    jupiter: NavigationActions.jupiter,
    placeOrders: NavigationActions.placeOrders
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
