/* @flow */

import React from 'react';

type TodoArgs = {
  text: string,
  completed: boolean,
  onClick: Function
};

export default class Todo extends React.Component {
  constructor(props: TodoArgs) {
    super(props);
  }

  props: TodoArgs;

  render() {
    return (
      <li>
        <div
          onClick={this.props.onClick}
          role="button"
          tabIndex="0"
        >
          {this.props.text}
        </div>
      </li>
    );
  }
}
