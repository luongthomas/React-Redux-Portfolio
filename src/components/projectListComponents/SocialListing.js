
import React, { Component } from 'react';

export default class SocialListing extends Component {
  render() {
    const { title, description, name, date } = this.props;
    return (
      <div className="project-entry">
        <div>
          <div>
            {title}
          </div>
          <div className="project-date">
            {description}
          </div>
          <hr className="fancy-line"></hr>
        </div>
      </div>
    );
  }
}
