import React from "react";
import '../App.css'

function TodoList(props){

    return(
        <ul>
            {props.children}
        </ul>
        
    );
};

export default TodoList;