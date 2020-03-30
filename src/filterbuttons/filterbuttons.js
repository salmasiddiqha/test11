import React from 'react';
import PropTypes from 'prop-types';
import './filterbuttons.css';

class FilterButtons extends React.Component {

  name;
  constructor() {
    super();
    console.log("data in child component", this.propTypes);
  }

  toChild = (value) => {
    console.log("value from parent", value, this.state.value);
  }



  render() {
    // console.log("text in child", this.toChild);
    return (
      <div>
        <p>
          Child {this.props.name}
        </p>
      </div>
    )
  }
}

FilterButtons.propTypes = {};

FilterButtons.defaultProps = {};

export default FilterButtons;
