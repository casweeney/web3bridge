import React from 'react';
import Leader from './Leader';

const LeaderList = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 leader-board">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <Leader />
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