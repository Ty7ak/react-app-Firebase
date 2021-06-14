import { useContext } from 'react';
import DummyContext from '../../DummyContext';
import {auth, addPost, getAllPosts } from "../../firebase";
import Main from "../Main"

var docs = [];
const Messager = () => {
    const {message, setMessage} = useContext(DummyContext);

    const add = () => {
        addPost(auth.currentUser, message);
    }

    const getPosts = () => {
        docs = []
        getAllPosts().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push(doc.data().ownerName.toString()+"/"+doc.data().text.toString())
            });
            console.log(docs)
        });
    }
    return (
        <div className="boxes-container">
            <label>Enter message
            <div className="form">
                <input 
                className="input2"
                value={message}
                onChange={e => setMessage(e.target.value)}
                />
                <button onClick={add}>Dodaj post</button>
                <button onClick={getPosts}>Pobierz posty</button>            
            </div>
            </label>
        </div>
    )
}
export default Messager;
export {docs};