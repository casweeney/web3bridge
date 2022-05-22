import React from 'react'

const LeaderForm = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h5>Select Iteration and add steps below.</h5>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="iteration">Select Iteration</label>
                                <select name="" id="iteration" className="form-control">
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
                                        <input type="text" className="form-control" id="leader-id" />
                                    </div>

                                    <div className="col-md-7">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="steps">Steps</label>
                                        <input type="text" className="form-control" id="steps" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Add</button>
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