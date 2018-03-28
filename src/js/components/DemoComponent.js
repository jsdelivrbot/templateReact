import React from 'react'
import AppStore from 'Store'

export default class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variable: AppStore.getVariable()
    }
  }

  componentWillMount() {
    AppStore.on("CHANGE", this.getVariable.bind(this));
  }
  componentWillUnmount() {
    AppStore.removeListener("CHANGE", this.getVariable.bind(this));
  }
  getVariable() {
    this.setState({
      variable: AppStore.getVariable()
    });
  }

  render() {
    let variableString = JSON.stringify(this.state.variable);
    return (
      <div>
        <span>Variable: </span>
        <span><strong>{variableString}</strong></span>
      </div>
    );
  }
}
