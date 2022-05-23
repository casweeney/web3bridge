import React, { useState, useContext } from 'react';
import LeaderContext from "../../context/leaderboard/leaderContext";

const LeaderForm = () => {
    const leaderContext = useContext(LeaderContext);
    const { addWorkout } = leaderContext;

    const [workout, setWorkout] = useState({
        iteration: "",
        leader_id: "",
        name: "",
        steps: ""
    });

    const {iteration, leader_id, name, steps} = workout;

    const onChange = (e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        addWorkout(workout);
        setWorkout({
            iteration: "",
            leader_id: "",
            name: "",
            steps: ""
        });

    }

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h5>Select Iteration and add steps below.</h5>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="iteration">Select Iteration</label>
                                <select 
                                    name="iteration" 
                                    id="iteration" 
                                    className="form-control"
                                    onChange={onChange}
                                    defaultValue={iteration}
                                >
                                    <option value="1">Iteration 1</option>
                                    <option value="2">Iteration 2</option>
                                    <option value="3">Iteration 3</option>
                                    <option value="4">Iteration 4</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-2">
                                        <label htmlFor="leader-id">Leader ID</label>
                                        <input 
                                            name="leader_id"
                                            type="text" 
                                            className="form-control" 
                                            id="leader_id" 
                                            value={leader_id}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="col-md-7">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            name="name"
                                            type="text" 
                                            className="form-control" 
                                            id="name" 
                                            value={name}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="steps">Steps</label>
                                        <input 
                                            name="steps"
                                            type="text" 
                                            className="form-control" 
                                            id="steps" 
                                            value={steps}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}

export default LeaderForm;