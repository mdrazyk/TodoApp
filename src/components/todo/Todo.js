import React from 'react'
import propTypes from 'prop-types'
import './Todo.css'

const Todo = ({id, todoTitle, todoBody, done, reject, expand}) => 
    <div className="Todo">
        <p className="Todo-header">{todoTitle}</p>
        <p className="Todo-body">{todoBody}</p>
        <div className="Todo-footer">
            <p onClick={() => done()} style ={{fontSize: "40px", color: "#FF6F00"}}>&#10005;</p>
            <p onClick={() => expand()} style ={{fontSize: "40px"}}>&#8801;</p>
            <p onClick={() => reject()} style ={{fontSize: "40px", color: "#4CAF50"}}>&#10003;</p>
        </div>
    </div>

Todo.propTypes = {
    todoTitle: propTypes.string.isRequired,
    todoBody: propTypes.string.isRequired,
    done: propTypes.func,
    reject: propTypes.func,
    expand: propTypes.func
}

export default Todo