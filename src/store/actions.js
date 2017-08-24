export const loadCards = data => ({
  type: 'LOAD_CARDS',
  data,
});

export const loadMoreCardsData = data => ({
  type: 'LOAD_MORE_CARDS_DATA',
  data,
});

export const hideMore = bool => ({
  type: 'HIDE_MORE',
  isHidden: bool,
});

export const formIsVisible = bool => ({
  type: 'FORM_VISIBLE',
  isVisible: bool,
});

export const addNewCard = data => ({
  type: 'ADD_CARD',
  data,
});

export const fetchCardData = () => (
  async (dispatch) => {
    try {
      const response = await fetch('https://api.myjson.com/bins/5bdb3');
      response.json().then((data) => {
        dispatch(loadCards(data));
      });
    } catch (err) {
      console.log('there was an error getting your data');
    }
  }
);

export const fetchMoreCardData = () => (
  async (dispatch, getState) => {
    const state = getState();

    if (state.moreCardData.length !== 0) {
      try {
        const response = await fetch('https://api.myjson.com/bins/47axv');
        response.json().then((data) => {
          dispatch(loadMoreCardsData(data));
        });
      } catch (err) {
        console.log('there was an error getting your data');
      }
    }
  }
);
