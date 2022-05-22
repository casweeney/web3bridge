import { ADD_WORKOUT } from "../types";
  
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
      case ADD_WORKOUT:
          return {
              ...state,
              leaders: [action.payload, ...state.leaders]
          };
      default:
        return state;
    }
};
  