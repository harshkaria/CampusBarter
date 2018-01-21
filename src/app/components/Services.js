import React from 'react'
import axios from 'axios'

class Services extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      servicesUrl: "http://localhost:3001/api/services",
      servicesData:[],
      mounted:false
    }
    this.load = this.load.bind(this)
    this.loadServicesData = this.loadServicesData.bind(this)
  }

  load(){
    if(!this.state.mounted){
      this.setState({
        mounted:true
      })
      this.loadServicesData()
      setInterval(this.loadServicesData, 800)
    }
  }

  loadServicesData(){
    axios.get(this.state.servicesUrl)
      .then(res => {
        this.setState({ servicesData: res.data })
      })
      console.log(this.state.servicesData)
  }

  render() {
    this.load()
    var arr = this.state.servicesData
    var arr2 = []
    var count = Math.ceil(arr.length/3)
    var i = 0
    for(i =0; i < count; i++)
      arr2.push([])
    var index = 0
    for(i=0; i < arr.length; i++){

    }
    return(

      <div>
        <center>
          <div style={{background:"transparent"}} className="jumbotron">
              <h1 className="jumbotron-heading">Services</h1>
              <p className="lead text-muted">Any task. This second.</p>
          </div>
        </center>

        <div className="col-lg-4 col-md-6 mb-4">
			     <div className="card border-info mb-3">
				       <div className="card-header">
				            <h4>
                      <a href="#">Service One</a>
                    </h4>
				       </div>
               <div className="card-body">

					          <h5>$24.99</h5>
					          <i><h6>Seller</h6></i>
					          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
						        <center><button type="button" className="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#myModal">Purchase</button></center>
					     </div>
					 </div>
        </div>
      </div>
    )
  }
}

export default Services
