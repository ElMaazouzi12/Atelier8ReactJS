import React from "react";

class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return(
            <>
              {/* Update Task */}
              <div className="row">
                <div className="col">
                  <input 
                    value={ this.props.updateData && this.props.updateData.description }
                    onChange={ (e) => this.props.changeTask(e)}
                    className=""
                  />
                </div>
                <div className="">
                  <button
                    onClick={this.props.updateTask}
                    className=""
                  >Update</button>
                  <button
                    onClick={this.props.cancelUpdate}
                    className=""
                  >Cancel</button>
                </div>
              </div>
              <br />  
            </>
          )
    }
}
 

export default UpdateForm;