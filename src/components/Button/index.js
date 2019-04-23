import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import colors from '../../theme/colors'
import metrics, { scale } from '../../theme/metrics'

type Props = {
}

const NOBORDER = {
  borderWidth: 0,
}
class Button extends Component {

  state = {
    isLoading: false,
  }

  toggle = () => {
    const { isLoading } = this.state
    this.setState({ isLoading: !isLoading })
  }

  renderContent() {
    const { isLoading } = this.state

    return isLoading
            ? this.renderIndicator()
            : this.renderChildren()
  }

  renderIndicator() {
    const { indicatorColor, indicatorSize } = this.props
    return <ActivityIndicator size={indicatorSize} color={indicatorColor} />
  }

  renderChildren() {
    const { children, title, titleStyle } = this.props
    
    return (
       children == null 
        ? <Text style={[styles.text, titleStyle]}> {title ? title : 'Button'} </Text>
        : children
    )
  }

  render() {
    const {
      half,
      style,
      onPress,
      disabled,
      hideBorder,
      activeOpacity,
    } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.button,
          style,
          (half) && styles.half,
          (hideBorder) && NOBORDER
        ]}
        onPress={ () => {
          onPress
          this.toggle()
        } }
        activeOpacity={activeOpacity}
        disabled={disabled}
      >
        { this.renderContent() }
      </TouchableOpacity>
    )
  }
}

/**
 * Default props 
 */

Button.defaultProps = {
  activeOpacity: 0.7,
  children: null,
  onPress: () => {},
  disabled: false,
  style: {},
  isLoading: true,
  indicatorColor: colors.white,
  indicatorSize: 'small',
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.black,
    color: colors.white,
    height: scale(50),
    marginHorizontal: scale(20),
    marginVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.base.radius,
    borderWidth: scale(1),
    borderColor: colors.black,
  },
  text: {
    color: colors.white,
    fontSize: scale(15),
    textAlign: 'center',
  },
  half: {
    width: '50%',
  }
});

export default Button
