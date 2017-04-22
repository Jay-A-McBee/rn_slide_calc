import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../components/labels';
import { InnerContent, Row, FixedWidthContainer } from '../components/positioning/container';

const textProps = {
  size: 12,
  color: 'black',
  textAlign:'center'
}

const figureProps = {
  size: 18,
  color: 'green',
  textAlign: 'center'
}

const TextBlock = (props,idx) => {
  
  const {
    title,
    figure,
    circle,
    width,
    bckg
  } = props;
  
  return(
    <FixedWidthContainer
      key={title}
      percent={width}
      bckgColor={bckg}
      justify='center'
      circle={!!circle}
    >
      <StyledText
        {...textProps} 
        textAlign='center'
      >{title}
      </StyledText>
      <StyledText
        {...figureProps} 
        textAlign='center'
      >{figure}
      </StyledText>
    </FixedWidthContainer>
  )
}


export const Readout = (props) => {
  
  let {
    base,
    actual,
    slide,
    contract,
  } = props;

  const diff = actual - base;
  const hundredWeight = (weight) => weight/100;
  const adjustedPrice = contract - (diff * slide);
  const withSlide = adjustedPrice * hundredWeight(actual);
  const originalPrice = contract * hundredWeight(base);
  
  const textConfig = [{
    title:'Weight Difference',
    figure:`${diff} lbs.`,
    circle: true,
    width: .4,
    bckg: 'rgba(192, 210, 226,.7)'
  },{
    title:'Adjusted Price /cwt',
    figure:`$${adjustedPrice.toFixed(2)}`,
    circle: true,
    width: .4,
    bckg: 'rgba(192, 210, 226,.7)'
  },{
    title:'Adjusted price /head',
    figure:`$${withSlide.toFixed(2)}`,
    circle: true,
    width: .88,
    bckg: 'rgba(192, 210, 226,.7)'
  },{
    title:'Original price /head' ,
    figure:`$${originalPrice.toFixed(2)}`,
    circle: true,
    width: .88,
    bckg: 'rgba(192, 210, 226,.7)'
  }];

  return(
    <View>
      <Row justify='space-between'>
        {textConfig.slice(0,2).map(TextBlock)}
      </Row>
      <Row justify='center' marginTop={10}>
        {textConfig.slice(3).map(TextBlock)}
      </Row>
      <Row justify='center' marginTop={10}>
        {textConfig.slice(2,3).map(TextBlock)}
      </Row>
    </View>
  )
}