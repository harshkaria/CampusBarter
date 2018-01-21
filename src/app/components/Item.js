import React from 'react'

class Item extends React.Component {
  render() {
    var str = "Not Sold"
    if(this.props.sold)
      str = "Sold"
    console.log(this.props.sold)
    return(
      <div className="col-lg-4 col-md-6 mb-4">
      <div className="card-body">
          <h4 className="card-title">
            <a href="#">{this.props.name}</a>
          </h4>
          <h5><b>{str}</b></h5>
          <i><h6>Seller: {this.props.owner}</h6></i>
          <p className="card-text">{this.props.desc}</p>
          <center><button type="button" className="btn btn-outline-success btn-lg">Purchase</button></center>
      </div>
      </div>
    )
  }
}

export default Item
