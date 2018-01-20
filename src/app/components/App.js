import React from 'react'
import Button from 'material-ui/Button'
import axios from 'axios'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url:"http://localhost:3001/api/items",
      data: [],
    }
    this.loadData = this.loadData.bind(this)
    this.deleteData = this.deleteData.bind(this)
    this.addData = this.addData.bind(this)
    this.updateData = this.updateData.bind(this)
  }

  //http://localhost:3001/api/comments
  //http://localhost:3001/api/users
  loadData(){
    axios.get(this.state.url)
      .then(res => {
        this.setState({ data: res.data })
      })
    console.log(this.state.data)
  }

  deleteData(){
    axios.delete(`${this.state.url}/${"5a632481734d1d72fc07bc81"}`)
      .then(res => {
        console.log('Comment deleted')
      })
      .catch(err => {
        console.error(err)
      })
  }
  addData(){
    //comments
    /*let comments = this.state.data;
    var comment = {text:"New text", idNum:"12", status: "Employed"}
    let newComments = comments.concat([comment])
    this.setState({ data: newComments})
    axios.post(this.state.url, comment)
      .catch(err => {
        console.error(err)
        this.setState({ data: comments })
      })*/
    //users
    /*let users = this.state.data;
    var user = {name:"Adit Bhagat", messages:[{message:"hey wassup",sender:"Harsh Karia"},{message:"ayy",sender:"Ashwin Chidambaram"}]}
    let newUsers = users.concat([user])
    this.setState({data: newUsers})
    axios.post(this.state.url, user)
      .catch(err => {
        console.log(err)
        this.setState({ data: users })
      })*/
    //items
    let items = this.state.data
    var item = {name:"Book", owner:"Harsh Karia", sold:"false", desc: "Vector Calculus"}
    let newItems = items.concat([item])
    this.setState({data: newItems})
    axios.post(this.state.url, item)
      .catch(err => {
        console.log(err)
        this.setState({ data: items})
      })
  }

  updateData(){
    //Comments
    /*var comment = {text:"Updated text", idNum:"12", status: "Employed"}
    var id = "59a117369b75d242e475a2fd"
    axios.put(`${this.state.url}/${id}`, comment)
    .catch(err => {
      console.log(err);
    })*/
    //Users
    /*var user = {name:"William Chao", messages:[{message:"hey wassup",sender:"Harsh Karia"},{message:"ayy",sender:"Ashwin Chidambaram"}]}
    var id = "5a634d8345bebe36487e9276"
    axios.put(`${this.state.url}/${id}`, user)
    .catch(err => {
      console.log(err)
    })*/
    //Items
    var item = {name:"Pencil", owner:"Adit Bhagat", sold:"false", desc: "Vector Calculus"}
    var id = "5a63504c45bebe36487e9278"
    axios.put(`${this.state.url}/${id}`, item)
    .catch(err => {
      console.log(err)
    })
  }

  render(){
      return(
          <div>
            <Button raised color="primary" onClick={this.loadData}>
              Load data
            </Button>
            <Button raised color="accent" onClick={this.deleteData}>
              Delete data
            </Button>
            <Button raised style={{backgroundColor:"#9C27B0"}} onClick={this.addData}>
              Add data
            </Button>
            <Button raised style={{backgroundColor:"#3F51B5"}} onClick={this.updateData}>
              Update data
            </Button>
          </div>
      )
    }
}

export default App
