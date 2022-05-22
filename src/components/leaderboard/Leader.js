import React from 'react'

const Leader = ({name}) => {
  return (
    <div className="col-md-6 mb-2">
        <div className="card">
            <div className="card-body">
                <h4 className="card-heading">
                    {name}
                </h4>
            </div>
        </div>
    </div>
  )
}

export default Leader