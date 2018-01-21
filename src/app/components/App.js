import React from 'react'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {withRouter} from 'react-router'
import Main from './Main'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      itemsUrl:"http://localhost:3001/api/items",
      usersUrl:"http://localhost:3001/api/users",
      itemsData: [],
      classnames: ["nav-item active", "nav-item", "nav-item", "nav-item"]
    }
    //this.loadItemsData = this.loadItemsData.bind(this)
    //this.loadUsersData = this.loadUsersData.bind(this)
    //this.deleteItemsData = this.deleteItemsData.bind(this)
    //this.deleteUsersData = this.deleteUsersData.bind(this)
    //this.addData = this.addData.bind(this)
    //this.addItems = this.addItems.bind(this)
    //this.addUsers = this.addUsers.bind(this)
    //this.updateData = this.updateData.bind(this)
    //this.updateItems = this.updateItems.bind(this)
    //this.updateUsers = this.updateUsers.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  //http://localhost:3001/api/comments
  //http://localhost:3001/api/users
  /*loadItemsData(){
    axios.get(this.state.itemsUrl)
      .then(res => {
        this.setState({ itemsData: res.data })
      })
    console.log(this.state.itemsData)
  }

  loadUsersData(){
    axios.get(this.state.usersUrl)
      .then(res => {
        this.setState({ usersData: res.data })
      })
    console.log(this.state.usersData)
  }

  deleteItemsData(){
    var id = "5a63cf8c500a3b29284ebe17"
    axios.delete(`${this.state.itemsUrl}/${id}`)
      .then(res => {
        console.log('Comment deleted')
      })
      .catch(err => {
        console.error(err)
      })
  }

  deleteUsersData(){
    var id = "5a634d8345bebe36487e9276"
    axios.delete(`${this.state.usersUrl}/${id}`)
      .then(res => {
        console.log('Comment deleted')
      })
      .catch(err => {
        console.error(err)
      })
  }

  addItems(){
    let items = this.state.itemsData
    var item = {name:"Book", owner:"Harsh Karia", sold:"false", desc: "Vector Calculus"}
    let newItems = items.concat([item])
    this.setState({itemsData: newItems})
    axios.post(this.state.itemsUrl, item)
      .catch(err => {
        console.log(err)
        this.setState({ itemsData: items})
      })
  }

  addUsers(){
    //users
    let users = this.state.usersData;
    var user = {name:"Adit Bhagat", messages:[{message:"hey wassup",sender:"Harsh Karia"},{message:"ayy",sender:"Ashwin Chidambaram"}]}
    let newUsers = users.concat([user])
    this.setState({usersData: newUsers})
    axios.post(this.state.usersUrl, user)
      .catch(err => {
        console.log(err)
        this.setState({ usersData: users })
      })
  }*/

  /*
  addData(){
    //items
    let items = this.state.itemsData
    var item = {name:"Book", owner:"Harsh Karia", sold:"false", desc: "Vector Calculus"}
    let newItems = items.concat([item])
    this.setState({itemsData: newItems})
    axios.post(this.state.url, item)
      .catch(err => {
        console.log(err)
        this.setState({ itemsData: items})
      })
  }

  updateItems(){
    var item = {name:"Pencil", owner:"Adit Bhagat", sold:"false", desc: "Vector Calculus"}
    var id = "5a63cd4a500a3b29284ebe16"
    axios.put(`${this.state.itemsUrl}/${id}`, item)
    .catch(err => {
      console.log(err)
    })
  }

  updateUsers(){
    var user = {name:"William Chao", messages:[{message:"hey wassup",sender:"Harsh Karia"},{message:"ayy",sender:"Ashwin Chidambaram"}]}
    var id = "5a632f53734d1d72fc07bdc8"
    axios.put(`${this.state.usersUrl}/${id}`, user)
    .catch(err => {
      console.log(err)
    })
  }*/


  //updateData(){
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
    /*var item = {name:"Pencil", owner:"Adit Bhagat", sold:"false", desc: "Vector Calculus"}
    var id = "5a63504c45bebe36487e9278"
    axios.put(`${this.state.url}/${id}`, item)
    .catch(err => {
      console.log(err)
    })
  }*/
  handleClick(event){

    /*for(i = 0; i < childs.length; i++) {
      if (node == childs[i]) break;
    }*/
    var num = parseInt(event.currentTarget.dataset.id)
    switch(num){
      case 1:
        this.setState({
          classnames: ["nav-item active", "nav-item", "nav-item", "nav-item"]
        })
        break;
      case 2:
          this.setState({
            classnames: ["nav-item", "nav-item active", "nav-item", "nav-item"]
          })
          break;
      case 3:
          this.setState({
            classnames: ["nav-item", "nav-item", "nav-item active", "nav-item"]
          })
          break;
      case 4:
          this.setState({
             classnames: ["nav-item", "nav-item", "nav-item", "nav-item active"]
          })
          break;
      default:
        break;
    }
  }

  componentDidMount(){
    console.log("Mounted")
    //this.loadItemsData()
    //this.loadUsersData()
    //setInterval(this.loadItemsData, 800)
    //setInterval(this.loadUsersData, 800)
  }

  render(){
      return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <a className="navbar-brand" href="#">CampusBarter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Link to="/barterfeed">
              <li id="list1" className={this.state.classnames[0]} data-id="1" onClick={this.handleClick}>
                <a className="nav-link" href="#" >Barter Feed</a>
              </li>
              </Link>
              <Link to="/barterlist">
              <li className={this.state.classnames[1]} data-id="2" onClick={this.handleClick}>
                <a className="nav-link" href="#">Barter List</a>
              </li>
              </Link>
              <Link to="/services">
              <li className={this.state.classnames[2]} data-id="3" onClick={this.handleClick}>
                <a className="nav-link" href="#">Services</a>
                <span className="sr-only">(current)</span>
              </li>
              </Link>
              <Link to="/inbox">
              <li className={this.state.classnames[3]} data-id="4" onClick={this.handleClick}>
                <a className="nav-link" href="#">Inbox</a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
        </nav>
        <Main />
        </div>

          /*<div>
            <Button raised color="primary" onClick={this.loadItemsData}>
              Load items data
            </Button>
            <Button raised color="accent" onClick={this.deleteItemsData}>
              Delete items data
            </Button>
            <Button raised style={{backgroundColor:"#9C27B0"}} onClick={this.addItems}>
              Add item
            </Button>
            <Button raised style={{backgroundColor:"#3F51B5"}} onClick={this.updateItems}>
              Update item
            </Button>
            <br />
            <Button raised color="primary" onClick={this.loadUsersData}>
              Load user data
            </Button>
            <Button raised color="accent" onClick={this.deleteUsersData}>
              Delete user data
            </Button>
            <Button raised style={{backgroundColor:"#9C27B0"}} onClick={this.addUsers}>
              Add user
            </Button>
            <Button raised style={{backgroundColor:"#3F51B5"}} onClick={this.updateUsers}>
              Update user
            </Button>
          </div>*/
      )
    }
}

export default withRouter(App)
