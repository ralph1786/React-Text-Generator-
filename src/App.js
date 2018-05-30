import React, { Component } from 'react';
import './App.css';
import Output from "./component/output";
import axios from 'axios';
import Select from "./component/controls/select";
import Number from "./component/controls/number";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 3,
      format: '',
      text: ''
    }
  }
   
  componentWillMount() {
    this.getSampleText();
  }
  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&format='+this.state.format)
    .then((response) => {
      this.setState({text: response.data}, function(){
        console.log(this.state)
      })
    })
    .catch((err) => {
      console.log(err);
    });
}

  showHtml(x){
    this.setState({format: x}, this.getSampleText)
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText)
  }

  render() {
    return (
      <div className="App container">
        <h2 className="text-center">Text Generator With ReactJs</h2>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Format</label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
          </div>
          <div className="form-group">
            <label>Number of Paragraphs</label>
            <Number value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
