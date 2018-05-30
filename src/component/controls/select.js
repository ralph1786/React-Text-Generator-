import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e){
        this.setState({value: e.target.value}, function(){
            this.props.onChange(this.state.value);
        });
    }
    
    render() {
    return (
      <div>
        <select className='form-control' onChange={this.onChange.bind(this)}>
            <option value="json">JSON</option>
            <option value="text">Text</option>
            <option value="html">HTML</option>
        </select>
      </div>
    )
  }
}
