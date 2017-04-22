import React, {Component} from 'react';
import { Container, BackgroundImage, InnerContent } from './components/positioning/container';
import { LeversAndGears } from './containers/lever-container';
import { Readout } from './containers/readout-container';
import cow from './Assets/01cow-bg.gif';


export default class App extends Component {
  constructor(props){
    super()
    this.state={
      contract: '225',
      base: '550',
      actual: '575',
      slide: '.10'
    }
  }

  handleChange = (val, field) => {
    const isString = typeof val === 'string';
    
    this.setState( (state, props) => ({
      [field]: isString ? val.replace(/\$/,'') : val
    }))
  }

  render() {

    const convertedProps = Object.keys(this.state).reduce( (acc,key) => {
      acc[key] = +this.state[key];
      return acc;
    },{})
    
    return (
      <Container
        justify='space-around'
        source={cow}
      >
        <InnerContent
          alignItems='center'
          justify='center'
          factor={.9}
        >
          <LeversAndGears 
            {...this.state}
            handleChange={this.handleChange}
          />
          <Readout 
            {...convertedProps}
          />
        </InnerContent>
      </Container>
    )
  }
}