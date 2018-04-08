import { connect } from 'react-redux';
import Projects from './Projects';
import { fetchProjects } from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default ProjectsContainer;
