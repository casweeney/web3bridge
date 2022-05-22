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
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {leaders.length > 0 && leaders.map((leader) => (
                                <Leader name={leader.name} key={leader.id} />
                            ))}
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