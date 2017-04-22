import React from 'react';
import { View } from 'react-native';
import { InnerContent, FixedWidthContainer, Row } from '../components/positioning/container';
import { StyledTextInput, BottomBorderView } from '../components/input';
import { StyledTitle, FieldLabel, StyledText} from '../components/labels';
import { StyledSlider } from '../components/slide';

export const LeversAndGears = (props) => {
  let {
    contract,
    base,
    actual,
    slide, 
    handleChange
  } = props;

  const textProps = {
    size: 16,
    color: 'black',
    textAlign:'center'
  }
  
  return(
    <View>
      <StyledTitle>Slide Calculator</StyledTitle>
        <BottomBorderView withBorder>
          <FieldLabel>Contract Price per cwt.</FieldLabel>
          <StyledTextInput
            autoFocus={true}
            defaultValue={`$${contract}`}
            value={`$${contract}`}
            onChange={(e) => handleChange(e.nativeEvent.text, 'contract')}
          />
        </BottomBorderView>
        <Row justify='space-between'>
          <FixedWidthContainer percent={.35}>
            <BottomBorderView withBorder marginTop={20}>
              <FieldLabel>Base Weight</FieldLabel>
              <StyledTextInput 
                defaultValue={base}
                value={base}
                onChange={(e) => handleChange(e.nativeEvent.text, 'base')}
              />
            </BottomBorderView>
          </FixedWidthContainer>
          <FixedWidthContainer percent={.35}>
            <BottomBorderView withBorder>
              <FieldLabel>Actual Weight</FieldLabel>
              <StyledTextInput 
                defaultValue={actual}
                value={actual}
                onChange={(e) => handleChange(e.nativeEvent.text, 'actual')}
              />
            </BottomBorderView>
          </FixedWidthContainer>
        </Row>
        <Row justify='space-between'>
          <FixedWidthContainer percent={.65}>
            <BottomBorderView>
              <FieldLabel>Slide Value per cwt.</FieldLabel>
              <StyledSlider
                value={+slide}
                onValueChange={(val) => handleChange(val, 'slide') }
                minimumValue={0}
                maximumValue={1}
                step={.01}
                minimumTrackTintColor={'blue'}
                maximumTrackTintColor={'green'}
              />
            </BottomBorderView>
          </FixedWidthContainer>
          <FixedWidthContainer percent={.2} justify='center'>
            <StyledText {...textProps}>{`${(+slide).toFixed(2)}`}</StyledText> 
          </FixedWidthContainer>
      </Row>
    </View>
  )
}