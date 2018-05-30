import React, { Component } from 'react'

export default class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value }, function () {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return (
            <div>
                <input className="form-control" type="number" value={this.state.value} onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}
