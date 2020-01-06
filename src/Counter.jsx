import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./action/actions";

class Counters extends Component {
  increment = () => {
    //    console.log(this.props.st);
    //console.log(this.props.getState());
    this.props.dispatch({ type: "inc" });
  };
  decrement = () => {
    this.props.dispatch({ type: "dec" });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>
        <h2>{this.props.counter22}</h2>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.dec}>-</button>
        <count value={this.props.counter} />
      </React.Fragment>
    );
  }
}
function mapStateToProps(store) {
  console.log("ngg", store);
  return {
    counter: store.red1.counter,
    counter22: store.red2.counter2,
    st: store
  };
}
function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(action.increment("inc")),

    dec: () => dispatch({ type: "dec22" })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters);
