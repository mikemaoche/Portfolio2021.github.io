import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

export default class ProgressBar extends Component {
  constructor(props){
      super(props)
      this.state={
          percent:props.percent,
          language:props.language
      };
      
  }

  componentDidUpdate(nextProps) {
    if(nextProps.percent !== this.state.percent) this.setState({ percent: nextProps.percent })
  }


  render() {
    return (
      <div>
        <label>{this.state.language}</label>
        <Progress active percent={this.state.percent} size="tiny" color="pink" />
      </div>
    )
  }
}