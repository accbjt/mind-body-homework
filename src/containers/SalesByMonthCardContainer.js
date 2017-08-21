import { connect } from 'react-redux';
import SalesByMonthCard from '../components/SalesByMonthCard';
import { fetchCardData, fetchMoreCardData } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    cards: state.cards || [],
    moreCardData: state.cards || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCardData());
    },
    fetchMoreData: () => {
      debugger
      dispatch(fetchMoreCardData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesByMonthCard);
