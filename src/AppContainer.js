import { connect } from 'react-redux';
import App from './App';
import { formIsVisible } from './store/actions';

const mapDispatchToProps = dispatch => ({
  showForm: () => {
    dispatch(formIsVisible(true));
  },
});

export default connect(null, mapDispatchToProps)(App);
