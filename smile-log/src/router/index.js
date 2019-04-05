import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import Goods from '@/pages/Goods/Goods'
class RouterCom extends React.Component{
  constructor(props){
    super(props)
    console.log(this)
}
  render(){
    return(
      <Router>
    <Switch>
      <Route path = "/login" component = { Login } />
      <Route path = "/home/:id" render={(props)=>{
        return(
          <Home router={props}>
              <Route path='/home/goods' component={Goods}></Route>  
          </Home>
        )
      }} />
    </Switch>
  </Router>
    )
  }
  
}



export default RouterCom;