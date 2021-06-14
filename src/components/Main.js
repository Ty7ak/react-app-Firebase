import React from 'react';
import New from './New';
import StudentList from './StudentsList';
import Login from "./UserComponents/Login";
import Messager from "./UserComponents/Messager";
import Register from "./UserComponents/Register";
import { Route, Switch } from 'react-router-dom';
import { auth, getAllPosts } from "../firebase";
import {docs} from "./UserComponents/Messager";

class Main extends React.Component {
    state = {
        sList: [],
    }

    adder = () => {
      console.log("updating the list")
      while(this.state.sList.length > 0) {
        this.setState({
          sList: this.state.sList.pop()
       }); 
      }

      if(auth.currentUser!= null){
      docs.forEach(element => {
        this.setState({
          sList: this.state.sList.concat(docs)
          }); 
      }); 
      } 
    }
    
    
    render() {

        return (
    
          <Switch>
            <Route path="/" exact>
              <section><StudentList sList={this.state.sList} adder={this.adder}/></section>
            </Route>
            <Route path="/login">  
              <section><Login/></section>
            </Route>
            <Route path="/register">  
              <section><Register/></section>
            </Route>
            <Route path="/messager">  
              <section><Messager/></section>
            </Route>
            <Route>
              <section><h1>Error 404 - not found</h1></section>
            </Route>
          </Switch>
        );
      }
}

export default Main;