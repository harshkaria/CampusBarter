import React from 'react'
import {withRouter} from 'react-router'
import {Switch, Route} from 'react-router-dom'
import Barterfeed from './Barterfeed'
import Inbox from './Inbox'
import Barterlist from './Barterlist'
import Services from './Services'

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Switch>
        <Route exact path ="/" component={Barterfeed}/>
        <Route path = "/barterlist" component={Barterlist}/>
        <Route path = "/barterfeed" component={Barterfeed}/>
        <Route path = "/services" component={Services}/>
        <Route path = "/inbox" component={Inbox}/>
      </Switch>
    )
  }
}

export default withRouter(Main)
