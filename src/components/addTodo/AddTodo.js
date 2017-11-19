import React from 'react'
import propTypes from 'prop-types'
import Modal from '../modal/Modal'
import './AddTodo.css'

const AddTodo = ({cancel}) => <Modal>
                        <div className="Add-todo">
                            <div className="Container">
                                <form className="Form">
                                    <div>
                                        <label>Todo Title: </label>
                                        <input type="text" id="titleInput" placeholder="Insert todo title" required/>
                                    </div>
                                    <div>
                                        <label>Todo Description (optional)</label>
                                        <textarea id="descriptionInput"  placeholder="Insert todo description" rows="10"></textarea>
                                    </div>
                                    <div className="Buttons">
                                        <div className="Add-button" type="submit"> Add</div>
                                        <div className="Cancel-button" onClick={() => cancel()}> Cancel</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>

AddTodo.propTypes = {
    cancel: propTypes.func.isRequired
}

export default AddTodo