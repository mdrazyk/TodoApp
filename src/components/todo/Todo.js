import React from 'react'
import propTypes from 'prop-types'
import './Todo.css'

const Todo = ({id, todoTitle, todoBody, done, reject, expand}) =>
    <div className="Todo">
        <p className="Todo-header">{todoTitle}</p>
        <p className="Todo-body">{todoBody}</p>
        <div className="Todo-footer">
            <img src="done.png" className="image" alt="Lol xD something went wrong" onClick={() => done()}/>
            <img src="expand.png" className="image" alt="Lol xD something went wrong" onClick={() => expand()}/>
            <img src="decline.png" className="image" alt="Lol xD something went wrong" onClick={() => reject()}/>
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