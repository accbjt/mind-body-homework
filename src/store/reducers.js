export const cards = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CARDS':
      return action.data;
    default:
      return state;
  }
};

export const moreCardData = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MORE_CARDS_DATA':
      return action.data;
    default:
      return state;
  }
};

export const hideMore = (state = true, action) => {
  switch (action.type) {
    case 'HIDE_MORE':
      return action.isHidden;
    default:
      return state;
  }
};
