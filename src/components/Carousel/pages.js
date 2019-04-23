import React from 'react'
import { StyleSheet, View } from 'react-native'
import metrics, { scale } from '../../theme/metrics';

type Props = {
  children?: React.Node,
  pageStyle?: TStyle,
}

class Pages extends React.PureComponent<Props> {
  render(){
    const { children, pageStyle } = this.props
    
    return (
      <View style={[styles.container, pageStyle]}>
        { children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: metrics.screen.width,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginBottom: scale(40),
  },
})

export default Pages
