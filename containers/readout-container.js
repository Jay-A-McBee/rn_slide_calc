import React from 'react';
import { StyledText } from '../components/labels';
import { InnerContent, Row, FixedWidthContainer } from '../components/positioning/container';

const textProps = {
  size: 12,
  color: 'black',
  textAlign:'center'
}

const figureProps = {
  size: 22,
  color: 'green',
  textAlign: 'center'
}

export const Readout = (props) => {
  
  let {
    base,
    actual,
    slide,
    contract,
  } = props

  const diff = +actual - +base;
  const hundredWeight = (weight) => +weight/100;
  const adjustedPrice = +contract - (diff * +slide);
  const withSlide = +adjustedPrice * hundredWeight(actual);
  const originalPrice = +contract * hundredWeight(base);
  
  return(
    <InnerContent
      alignItems='center'
      justify='flex-start'
      factor={.3}
    >
      <Row justify='space-between'>
        <FixedWidthContainer
          percent={.4}
        >
          <StyledText{...textProps} textAlign='center'>Weight Difference</StyledText>
          <StyledText{...figureProps} textAlign='center'>{`${diff} lbs.`}</StyledText>
        </FixedWidthContainer>
        <FixedWidthContainer
          percent={.4}
        >
          <StyledText{...textProps} textAlign='center'>Adjusted Price /cwt</StyledText>
          <StyledText{...figureProps} textAlign='center'>{`$${adjustedPrice.toFixed(2)}`}</StyledText>
        </FixedWidthContainer>
      </Row>
      <Row justify='space-between'>
        <FixedWidthContainer
          percent={.4}
        >
          <StyledText{...textProps} textAlign='center'>Adjusted price /head</StyledText>
          <StyledText{...figureProps} textAlign='center'>{`$${withSlide.toFixed(2)}`}</StyledText>
        </FixedWidthContainer>
        <FixedWidthContainer
          percent={.4}
        >
          <StyledText{...textProps} textAlign='center'>Original price /head</StyledText>
          <StyledText{...figureProps} textAlign='center'>{`$${originalPrice.toFixed(2)}`}</StyledText>
        </FixedWidthContainer>
      </Row>
    </InnerContent>
  )
}