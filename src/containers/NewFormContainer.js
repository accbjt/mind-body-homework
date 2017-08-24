import { connect } from 'react-redux';
import NewForm from '../components/NewForm';
import { addNewCard, formIsVisible } from '../store/actions';

const mapStateToProps = state => ({
  isVisible: state.formVisible,
});

const mapDispatchToProps = dispatch => ({
  createNewProgram: (values) => {
    const data = {
      ProgramID: 108,
      Name: values.ProgramName,
      TotalMonthlySales: 0,
      MonthlyAttendance: 0,
    };

    dispatch(formIsVisible(false));
    window.scrollTo(0, 0);
    dispatch(addNewCard(data));
  },
  closeForm: () => {
    dispatch(formIsVisible(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewForm);
