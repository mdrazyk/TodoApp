import { addTodo, dontShowModal } from '../../actions'
import AddTodo from '../../components/todo/AddTodo'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    todos: state.todos,
    dontShowModal: dontShowModal
})
const mapDispatchToProps = {todos: addTodo, dontShowModal: dontShowModal}

const Add = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default Add
