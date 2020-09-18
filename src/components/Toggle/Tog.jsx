import { Component } from 'react';
import T from 'prop-types';

class Tog extends Component {
  static propTypes = {
    children: T.node.isRequired,
  };

  state = {
    on: true,
  };

  toggle = e => {
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children(on, this.toggle);
  }
}

export default Tog;
