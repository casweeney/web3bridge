import React, { useReducer } from "react";
import LeaderContext from "./leaderContext";
import leaderReducer from "./leaderReducer";

import { ADD_WORKOUT } from "../types";

const LeaderState = (props) => {
  const initialState = {
    leaders: []
  };

  const [state, dispatch] = useReducer(leaderReducer, initialState);

  // Update Leader Board
  const updateBoard = () => {
    
  };

  // Add Workout
  const addWorkout = (workout) => {

    console.log(workout);
    dispatch({
        type: ADD_WORKOUT,
        payload: workout
    });
  };

  

  return (
    <LeaderContext.Provider
      value={{
        leaders: state.leaders,
        updateBoard,
        addWorkout
      }}
    >
      {props.children}
    </LeaderContext.Provider>
  );
};

export default LeaderState;
