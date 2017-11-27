import { connect } from 'react-redux'
import todo from '../../actions'
import Todo from '../../components/todo/Todo'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  todoTitle: ownProps.todoTitle,
  todoBody: ownProps.todoBody,
  done: ownProps.done,
  reject: ownProps.reject,
  expand: ownProps.expand
})

const CreateTodo = connect(mapStateToProps)(Todo)

export default CreateTodo