import React from 'react'

class Inbox extends React.Component {
  render(){
    return(
      <div>
        <center>
          <div style={{background:"transparent"}} className="jumbotron">
            <h1 className="jumbotron-heading">Inbox</h1>
            <p className="lead text-muted">Communicate. Buy. Sell. Trade.</p>
          </div>
        </center>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-body">
                <h4 className="card-title">Item Name:
                  <i><small>Buyer Name</small></i>
                </h4>
                <p className="card-text">Message</p>
                <a href="#" className="btn btn-success" data-toggle="modal" data-target="#acceptModal">Accept</a>
                <div className="space"></div>
                <a href="#" className="btn btn-danger" data-toggle="modal" data-target="#declineModal">Decline</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-body">
                <h4 className="card-title">Item Name:
                  <i><small>Buyer Name</small></i>
                </h4>
                <p className="card-text">Message</p>
                <a href="#" className="btn btn-success" data-toggle="modal" data-target="#acceptModal">Accept</a>
                <div className="space"></div>
                <a href="#" className="btn btn-danger" data-toggle="modal" data-target="#declineModal">Decline</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-body">
                <h4 className="card-title">Item:
                  <i><small>Buyer Name</small></i>
                </h4>
                <p className="card-text">Message</p>
                <a href="#" className="btn btn-success" data-toggle="modal" data-target="#acceptModal">Accept</a>
                <div className="space"></div>
                <a href="#" className="btn btn-danger" data-toggle="modal" data-target="#declineModal">Decline</a>
              </div>
            </div>

          </div>
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
