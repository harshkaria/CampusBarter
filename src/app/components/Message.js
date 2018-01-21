import React from 'react'

class Message extends React.Component{
  render() {
    return(
      <div className="col-md-4">
        <div className="card card-body">
          <h4 className="card-title">Sender:
            <i><small> {this.props.sender}</small></i>
          </h4>
          <p className="card-text">{this.props.message}</p>
          <a href="#" className="btn btn-success" data-toggle="modal" data-target="#acceptModal">Accept</a>
          <div className="space"></div>
          <a href="#" className="btn btn-danger" data-toggle="modal" data-target="#declineModal">Decline</a>
        </div>
      </div>
    )
  }
}

export default Message
