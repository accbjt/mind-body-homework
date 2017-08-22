import { connect } from 'react-redux';
import SalesByMonthCard from '../components/SalesByMonthCard';
import { fetchCardData, fetchMoreCardData, hideMore } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    cards: state.cards || [],
    moreCardData: state.moreCardData || [],
    hideMore: state.hideMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCardData());
    },
    fetchMoreData: () => {
      dispatch(fetchMoreCardData());
      dispatch(hideMore(false));
    },
    changeHideMore: () => {
      dispatch(hideMore(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesByMonthCard);
