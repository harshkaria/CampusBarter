import React from 'react'
import Message from './Message'
import axios from 'axios'

class Inbox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      usersData:[],
      usersUrl:"http://localhost:3001/api/users",
      nounted: false
    }
    this.load = this.load.bind(this)
    this.loadUsersData = this.loadUsersData.bind(this)
  }

  load(){
    if(!this.state.mounted){
      this.setState({
        mounted:true
      })
      this.loadUsersData()
      setInterval(this.loadUsersData, 800)
    }
  }

  loadUsersData(){
    axios.get(this.state.usersUrl)
      .then(res => {
        this.setState({ usersData: res.data })
      })
    console.log(this.state.usersData)
  }

  render(){
    this.load()
    var rra = this.state.usersData
    var arr = rra[0]
    var arr2 = []
    var count = 0
    var i = 0
    var list = null
    if(arr!=null){
      console.log(arr.messages)
      arr = arr.messages
      count = Math.ceil(arr.length/3)
      for(i = 0; i < count; i++)
        arr2.push([])
      var index = 0
      for(i=0; i<arr.length; i++){
        if(arr[i]!=null && arr2[index]!=null)
          arr2[index].push(arr[i])
        if((i+1)%3==0)
          index++
      }
      list = arr2.map((x,index) => {
        return(
          <div className="row">
          {x.map((x,index) => {
            return(
              <Message
                sender = {x.sender}
                message = {x.message}
                />
            )
          })}
          </div>
        )
      })
    }

    return(
      <div>
        <center>
          <div style={{background:"transparent"}} className="jumbotron">
            <h1 className="jumbotron-heading">Inbox</h1>
            <p className="lead text-muted">Communicate. Buy. Sell. Trade.</p>
          </div>
        </center>

        <div className="container-fluid">
          {list}
        </div>

        <div className="modal fade" id="declineModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
			           <h4 className="modal-title" id="myModalLabel">Successfully Declined</h4>
                 <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <p>Transaction with buyer was declined.</p>
              </div>
              <div className="modal-footer">
				          <div className="col-12 text-center">
                    <button type="button" className="btn btn-default btn-block" data-dismiss="modal">Confirm</button>
				          </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="acceptModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Accept Offer</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="form-label"><b>Recipient:</b></label>
                    <p>Buyer</p>
                  </div>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label"><b>Message:</b></label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Inbox
