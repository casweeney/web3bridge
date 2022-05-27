import React, { useReducer } from "react";
import LeaderContext from "./leaderContext";
import leaderReducer from "./leaderReducer";

import { ADD_WORKOUT } from "../types";

const LeaderState = (props) => {
  const initialState = {
    leaders: [
        {
            leader_id: 1,
            name: "Casweeney Ojukwu",
            steps: 500,
            iteration: 1
        },
        {
            leader_id: 2,
            name: "Jane Uzoma",
            steps: 600,
            iteration: 1
        },
        {
            leader_id: 3,
            name: "Daniel Irabor",
            steps: 100,
            iteration: 1
        },
        {
            leader_id: 4,
            name: "Okikiola Shomuyi",
            steps: 300,
            iteration: 1
        }
    ]
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
