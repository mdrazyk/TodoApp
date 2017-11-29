import React from 'react'
import propTypes from 'prop-types'
import Modal from '../modal/Modal'
import './AddTodo.css'

const AddTodo = ({todos, dontShowModal}) => {
    let title = ''
    let body = ''
    return <Modal>
                <div className="Add-todo">
                    <div className="Container">
                        <form className="Form">
                            <div>
                                <label>Todo Title: </label>
                                <input type="text" id="titleInput" onChange={e => title = e.target.value} placeholder="Insert todo title"/>
                            </div>
                            <div>
                                <label>Todo Description (optional)</label>
                                <textarea id="descriptionInput" onChange={e => body = e.target.value} placeholder="Insert todo description" rows="10"></textarea>
                            </div>
                            <div className="Buttons">
                                <div className="Cancel-button" onClick={() => dontShowModal(false)}> Cancel</div>
                                <div className="Add-button" onClick={() => {
                                    if(title === '') {
                                        alert('You must at least provide Todo Title')
                                        return
                                    }
                                    todos({title, body})
                                    dontShowModal(false)
                                }}> Add</div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
}

export default AddTodo

AddTodo.propTypes = {
    todos: propTypes.func.isRequired,
    dontShowModal: propTypes.func.isRequired
}