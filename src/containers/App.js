import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Hills from '../components/Hills';
import Sun from '../components/Sun';
import ProjectsContainer from './ProjectsContainer';
import ProjectListContainer from './ProjectListContainer';
import SocialLinkContainer from './SocialLinkContainer';
import { startTime } from '../index';
import '../styles/parallax.scss';
// import '../styles/main.scss';
import '../styles/introduction.scss';
import '../styles/responsiveCol.scss';
import ListHeader from '../components/projectListComponents/ListHeader'

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  render() {
    const { projects, benchmark, personalInfo, projectLinks, socialLinks } = this.props;

    return (
      <div className="main-app-container parallax">
        <div className="parallax-group">
          <div className="parallax-layer parallax__layer--base">
            <Introduction personalInfo={personalInfo} />
          </div>
          <div className="parallax-layer parallax__layer--back-1">
            <Sun />
          </div>
          <div className="parallax-layer parallax__layer--back-2">
            <Hills />
          </div>
        </div>

        <div>
          <div className="flex-grid-halves">
            <div className="col">
              <ProjectListContainer />
            </div>
            <div className="col">
              <SocialLinkContainer />
            </div>
          </div>

          <div className="upper-container" style={{background: "white"}}>
            <div className="inner-container align-text-left">
                <ListHeader text="Say Hello" />
                Tell me about your favorite places to travel to, 
                ask me questions about programming, cryptocurrencies, 
                or Portland, or help me practice Japanese.  
                I am all ears.
            </div>
          </div>


        </div>



      
        <div className="main-app-container footer-container">
          <div className="parallax__shortGroup">
            <div className="parallax-layer parallax__layer--base">
              <div>
                <div className="introduction">
                  <div className="introduction__content">
                    <h2 className="introduction__name">
                      {'Please come back later for more content. '}
                    </h2>
                    <div className="introduction__tagline">
                      {'The site will expand as my knowledge of web programming grows!'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-layer parallax__layer--back-1">
              <Sun />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}




App.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  benchmark: PropTypes.number.isRequired,
  personalInfo: PropTypes.object.isRequired,
  projectLinks: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo,
    projectLinks: state.projectLinks,
    socialLinks: state.socialLinks
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BenchmarkActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
