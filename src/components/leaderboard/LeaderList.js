import React, { useContext } from 'react';
import Leader from './Leader';
import LeaderContext from "../../context/leaderboard/leaderContext";

const LeaderList = () => {
    const leaderContext = useContext(LeaderContext);
    const { leaders } = leaderContext;

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 leader-board">
                <h4 className="font-weight-bold">Top leading participants</h4>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {leaders.length > 0 ? 
                                leaders.sort((a,b) => b.steps-a.steps).slice(0,10).map((leader) => (
                                    <Leader name={leader.name} steps={leader.steps} key={leader.leader_id} />
                                ))
                            :
                                <p className="text-info font-weight-bold">No leaders on the board, use the form below to record your steps.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}

export default LeaderList