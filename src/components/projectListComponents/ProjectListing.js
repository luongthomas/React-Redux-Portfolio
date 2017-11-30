

import React, { Component } from 'react';

export default class ProjectListing extends Component {
  render() {
    const { title, description, name } = this.props;
    return (
      <div className="project-entry">
        <div>
          <div>
            {title}
          </div>
          <div className="project-date">
            May 2017
          </div>
          <hr className="fancy-line"></hr>
        </div>
      </div>
    );
  }
}
