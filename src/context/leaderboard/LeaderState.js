import React, { useReducer } from "react";
import LeaderContext from "./leaderContext";
import leaderReducer from "./leaderReducer";

//import { ADD_WORKOUT } from "../types";

const LeaderState = (props) => {
  const initialState = {
    leaders: [
        {
            id: 1,
            name: "Casweeney Ojukwu",
            score: 500
        },
        {
            id: 2,
            name: "Jane Uzoma",
            score: 600
        },
        {
            id: 3,
            name: "Daniel Irabor",
            score: 100
        },
        {
            id: 4,
            name: "Okikiola Shomuyi",
            score: 300
        }
    ]
  };

  const [state, dispatch] = useReducer(leaderReducer, initialState);

  // Update Leader Board
  const updateBoard = () => {
    
  };

  // Add Workout
  const addWorkout = (data) => {
    
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
