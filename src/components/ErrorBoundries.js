import { Component } from "react";
import classes from "./ErrorBoundries.module.css";

class ErrorBoundries extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <p className={classes.boundries}>There is something wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundries;
