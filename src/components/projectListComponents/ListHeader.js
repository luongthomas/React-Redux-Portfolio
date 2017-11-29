import React, { Component } from 'react';

export default class ListHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="projects-title">
        <h4>{text}</h4>
      </div>
    );
  }
}
