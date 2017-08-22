export const loadCards = (data) => {
  return {
    type: 'LOAD_CARDS',
    data,
  }
};

export const loadMoreCardsData = (data) => {
  return {
    type: 'LOAD_MORE_CARDS_DATA',
    data,
  }
};

export const hideMore = (bool) => {
  return {
    type: 'HIDE_MORE',
    isHidden: bool,
  }
};

export const fetchCardData = () => {
  return async (dispatch) => {
    try {
      const data = await fetch('https://api.myjson.com/bins/5bdb3');
      data.json().then(data => {
        dispatch(loadCards(data));
      });
    } catch (err) {
      console.log('there was an error getting your data');
    }
  };
};

export const fetchMoreCardData = () => {
  return async (dispatch) => {
    try {
      const data = await fetch('https://api.myjson.com/bins/47axv');
      data.json().then(data => {
        dispatch(loadMoreCardsData(data));
      });
    } catch (err) {
      console.log('there was an error getting your data');
    }
  };
};
