import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import { auth } from '../firebase';
import { useState, useEffect} from 'react';
import Main from "./Main";

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if(u){
                setUser(u);
            } else {
                console.log("User no logged");
            }
        });
        return () => unsubscribe();
    }, []);

    const logout = () =>{
        auth.signOut();
    }

    console.log(auth.currentUser);

    if(user){ 
        return(
            <div className="topnav">
              <NavLink  to="/" exact onClick={Main.adder}>Posts</NavLink>
              <NavLink to="/messager">Messager</NavLink>
              <a href="/" className="nav-button" onClick={logout}>Wyloguj</a>
          </div>
        )
    }
    return(
        <div className="topnav">
              <NavLink to="/" exact>User List</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/messager">Messager</NavLink>
          </div>
    )
}
export default Header;