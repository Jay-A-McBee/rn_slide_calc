import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window'); 

export const Container = styled.View`
  align-self: center;
  justify-content:${props => props.justify};
  height: ${height};
  width: ${width * .8};
`

export const InnerContent = styled.View`
  align-self: stretch;
  align-items:${props => props.alignItems};
  justify-content:${props => props.justify};
  height: ${props => height * props.factor};
`

export const FixedWidthContainer = styled.View`
  width:${props => width * props.percent};
  justify-content:${props => props.justify || 'flex-end'};
`

export const Row = styled.View`
  align-self:stretch;
  flex-direction:row;
  justify-content:${props => props.justify};
`