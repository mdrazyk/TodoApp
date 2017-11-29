import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CreateTodo from './containers/todo/CreateTodo'
import Logo from './components/logo/Logo'
import AddTodo from './containers/todo/AddTodo'
import Sortable from 'sortablejs'
import { showModal, addTodo, setTodoState } from './actions'
import store from './store'
import './App.css'
import './components/todo/Todo.css'

const mapStateToProps = (state) => ({
  showAddModal: state.modal,
  todos: state.todos
})

const mapDispatchToProps = {
  _showModal: showModal,
  _addTodo: addTodo,
  _setTodoState: setTodoState
}
class App extends PureComponent {
  componentDidMount(){
    const items = document.getElementById("items")
    Sortable.create(items, {
      animation: 150,
      filter: ".Todo-body",
      preventOnFilter: false
    })
  }

  render() {
    const state = store.getState()
    // const todos = null
    const showAddModal = this.props.showAddModal.slice(-1)[0] || false
    const modal = showAddModal.show ? <AddTodo/> : null
    // const todos = state.todos.map(e => 
    //   <CreateTodo
    //     key={e.id}
    //     todoTitle={e.todo.title}
    //     todoBody={e.todo.body}
    //     done={() => this.props._setTodoState('DONE')}
    //     reject={() => this.props._setTodoState('REJECT')}
    //     expand={() => this.props._setTodoState('EXPAND')}
    //   />
    // )
    const todos = null
    
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <nav className="App-nav">
          <a><p>Active Todos</p></a>
          <a onClick={this.props._showModal}><p>Add Todo</p></a>
          <a><p>Completed Todos</p></a>
        </nav>
        <div id="items" className="App-body">
          {todos}
        </div>
        {modal}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
