import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Text, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios'

export const StyledTitle = styled.Text`
  align-self: flex-start;
  font-family:${() => isIOS ? 'Copperplate' : 'roboto'};
  font-size:20;
  margin-bottom:20;
  text-align:center;
  color:black;
`
export const FieldLabel = styled.Text`
  font-family:${() => isIOS ? 'Copperplate' : 'roboto'};
  font-size:12;
  text-align:left;
  color:black;
  align-self:flex-start;
`
export const StyledText = styled.Text`
  font-family:${() => isIOS ? 'Copperplate' : 'roboto'};
  font-size:${props => props.size}
  color:${props => props.color}
  text-align:${props => props.textAlign || 'left'}
`
