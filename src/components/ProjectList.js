import React, { Component, PropTypes } from 'react';
import '../styles/ProjectList.scss';
import ProjectListing from './projectListComponents/ProjectListing'
import ListHeader from './projectListComponents/ListHeader'

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { project, projectLinks } = this.props;
    return (
      <div className="upper-container" style={{background: project.background_color}}>
        <ListHeader text="I am a header." />
        <ProjectListing title={project.title} name={project.name} description={project.description} />

      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  // projectLinks: PropTypes.object.isRequired
};
