import React from 'react';
import Item from './Item'


const StudentList = (props) => {

    
    const sList = props.sList.map(it => (
        <Item key={it} text={it}/>
    ))


    return (
        <div className="list-box">
            <button className="update-btn" onClick={props.adder}>Update posts</button>
            <ul>
               {sList}
            </ul>
        </div>
            
    );
    
}

export default StudentList;