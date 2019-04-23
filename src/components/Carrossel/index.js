import React, { Component } from 'react'
import colors from '../../theme/colors'
import { scale } from '../../theme/metrics'
import DWCarousel from './template'
import Pages from './pages'

type Props = {
  containerStyle?: TStyle,
  pageStyle?: TStyle,
  initialPage?: Integer,
  hideIndicators?: Boolean,
  indicatorColor?: String,
  indicatorSize?: Number,
  indicatorSpace?: Number,
  inactiveIndicatorColor?: String,
  indicatorAtBottom?: Boolean,
  indicatorOffset?: Number,
  inactiveIndicatorText?: String,
  indicatorText?: String,
  animate?: Boolean,
  delay?: Number,
  loop?: Boolean,
}

class Carousel extends Component<Props> {
  render() {
    const {
      children,
      containerStyle,
      initialPage,
      hideIndicators,
      indicatorColor,
      indicatorSize,
      indicatorSpace,
      inactiveIndicatorColor,
      indicatorAtBottom,
      indicatorOffset,
      inactiveIndicatorText,
      indicatorText,
      animate,
      delay,
      loop,
    } = this.props

    return (
      <DWCarousel
        initialPage={initialPage} // Set a initial page
        hideIndicators={hideIndicators} // Set to true to hide the indicators
        indicatorColor={indicatorColor} // Active indicator color
        indicatorSize={indicatorSize} // Indicator bullet size
        indicatorSpace={indicatorSpace} // space between each indicator
        inactiveIndicatorColor={inactiveIndicatorColor} // Inactive indicator color
        indicatorAtBottom={indicatorAtBottom} // Set to false to show the indicators at the top
        indicatorOffset={indicatorOffset} // Indicator relative position from top or bottom
        inactiveIndicatorText={inactiveIndicatorText} // Inactive indicator content ( You can customize to use any Unicode character )
        indicatorText={indicatorText} // Active indicator content ( You can customize to use any Unicode character )
        animate={animate} // Enable carousel autoplay
        delay={delay} // Set Animation delay between slides
        loop={loop} // Allow infinite looped animation. Depends on Prop {...animate} set to true.
        containerStyle={containerStyle}
      >
        {children}
      </DWCarousel>
    )
  }
}

Carousel.Page = Pages

/**
 * Default props by default ligth theme
 */

Carousel.defaultProps = {
  initialPage: 0,
  hideIndicators: false,
  indicatorColor: colors.white,
  indicatorSize: scale(30),
  indicatorSpace: scale(15),
  inactiveIndicatorColor: colors.gray,
  indicatorAtBottom: true,
  indicatorOffset: scale(0),
  inactiveIndicatorText: '•',
  indicatorText: '•',
  animate: false,
  delay: 1000, // Scale() unnecessary because this is a time
  loop: false,
  containerStyle: {},
  pageStyle: {},
}

export default Carousel
