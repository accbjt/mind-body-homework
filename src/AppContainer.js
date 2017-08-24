import { connect } from 'react-redux';
import App from './App';
import { formIsVisible } from './store/actions';

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: () => {
      dispatch(formIsVisible(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
