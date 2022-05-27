import React from 'react'

const Leader = ({name, totalSteps}) => {
  return (
    <div className="col-md-6 mb-2">
        <div className="card">
            <div className="card-body">
                <h4 className="card-heading">
                    {name}
                </h4>
                <p>Total steps: {totalSteps}</p>
            </div>
        </div>
    </div>
  )
}

export default Leader