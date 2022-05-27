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
            totalSteps: 500
        },
        {
            leader_id: 2,
            name: "Jane Uzoma",
            totalSteps: 600
        },
        {
            leader_id: 3,
            name: "Daniel Irabor",
            totalSteps: 100
        },
        {
            leader_id: 4,
            name: "Okikiola Shomuyi",
            totalSteps: 300
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
