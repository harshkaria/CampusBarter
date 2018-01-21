import React from 'react'

class Message extends React.Component{
  constructor(props){
    super(props)
    this.reg = this.reg.bind(this)
    this.norm = this.norm.bind(this)
  }
  reg(){
    this.props.onRegister(this.props.sender)
  }
  norm(){
    this.props.onNormal(this.props.message, this.props.sender)
  }
  render() {
    return(
      <div className="col-md-4">
        <div className="card card-body">
          <h4 className="card-title">New message from
            <i><small> {this.props.sender}</small></i>
          </h4>
          <p className="card-text">{this.props.message}</p>
          <a href="#" className="btn btn-success" data-toggle="modal" data-target="#acceptModal" onClick={this.reg}>Accept</a>
          <div className="space"></div>
          <a href="#" className="btn btn-danger" data-toggle="modal" data-target="#declineModal" onClick={this.norm}>Decline</a>
        </div>
      </div>
    )
  }
}

export default Message
