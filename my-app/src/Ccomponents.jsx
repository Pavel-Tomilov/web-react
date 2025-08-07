import React, { Component } from 'react'
import './stylesNew.css'
import { Button } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Fcomponent from './Fcomponent'

export default class Ccomponents extends Component {

constructor(props) {
  super(props);
  this.state = {
 name: "Button not pressed"
  };

  this.updateData = this.updateData.bind(this)
}

updateData = (value) => {
  this.setState({
    name:value
  })
}
  
 

  render() {
    
    return (
      <div>
   <p>State: {this.state.name}</p>
   <Fcomponent updateData={this.updateData}/>
      </div>
    )
  }

}
