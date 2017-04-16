import React, {Component} from 'react';
import { Container } from './components/positioning/container';
import { LeversAndGears } from './containers/lever-container';
import { Readout } from './containers/readout-container';


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
    
    return (
      <Container
        justify='space-around'
      >
        <LeversAndGears 
          {...this.state}
          handleChange={this.handleChange}
        />
        <Readout 
          {...this.state}
        />
        
      </Container>
    )
  }
}