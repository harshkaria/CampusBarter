import React from 'React'
import Item from './Item'
import axios from 'axios'

class Barterlist extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      itemsUrl: "http://localhost:3001/api/items",
      itemsData:[],
      mounted:false
    }
    this.loadItemsData = this.loadItemsData.bind(this)
    this.load = this.load.bind(this)
  }

  load(){
    if(!this.state.mounted){
      this.setState({
        mounted:true
      })
      this.loadItemsData()
      setInterval(this.loadItemsData, 800)
    }
  }

  loadItemsData(){
    axios.get(this.state.itemsUrl)
      .then(res => {
        this.setState({ itemsData: res.data })
      })
  }

  render() {
    this.load()
    var arr = this.state.itemsData
    var arr2 = []
    var i = 0
    var count = Math.ceil(arr.length/3)
    for(i=0; i<count; i++)
      arr2.push([])
    var index = 0
    for(i = 0; i < arr.length; i++){
      arr2[index].push(arr[i])
      if((i+1)%3==0)
        index++
    }
    console.log(arr2)

    var list = arr2.map((x, index) => {
      return (
        <div className="row">
          {x.map((x,index) => {
            return (
              <Item
                name = {x.name}
                sold = {x.sold}
                owner = {x.owner}
                desc = {x.desc}
                id = {x['_id']}/>
            )
          })}
        </div>
      )
    })
    return(
      <div>
      <center>
        <div style={{background:"transparent"}} className="jumbotron">
          <h1 className="jumbotron-heading"><b>Items for Sale</b></h1>
          <p className="lead text-muted">Treat yourself.</p>
        </div>
        </center>
        {list}
      </div>
    )
  }
}

export default Barterlist
