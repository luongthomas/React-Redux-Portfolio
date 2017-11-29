

import React, { Component } from 'react';

export default class ProjectListing extends Component {
  render() {
    const { title, description, name } = this.props;
    return (
      <div className="projects-title">
        <h2>{title}</h2>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Hello World</h4>
      </div>
    );
  }
}
