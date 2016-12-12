import React, { Component, PropTypes } from 'react';
import '../styles/introduction.scss';
import '../styles/parallax.scss';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="introduction">
        <div className="introduction__content">
          <h2 className="introduction__name">
            THOMAS LUONG
          </h2>
          <div className="introduction__tagline">
            Computer Science Graduate 2016
          </div>
          <div className="introduction__location">
            Portland, Oregon
          </div>
          <div className="introduction__icons">
            <a href={personalInfo.github}><i className="fa fa-github icon"></i></a>
            <a href={personalInfo.linkedIn}><i className="fa fa-linkedin-square icon"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
