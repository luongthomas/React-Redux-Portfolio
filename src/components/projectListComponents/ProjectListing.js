

import React, { Component } from 'react';

export default class ProjectListing extends Component {
  render() {
    const { title, description, name } = this.props;
    return (
      <div>
        <div className="project-entry">
          {title}
        </div>
        <hr className="fancy-line"></hr>
      </div>
    );
  }
}
