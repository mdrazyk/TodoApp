import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CreateTodo from './containers/todo/Create'
import Logo from './components/logo/Logo'
import AddTodo from './containers/todo/Add'
import Sortable from 'sortablejs'
import { showModal, addTodo } from './actions'
import './App.css'
import './components/todo/Todo.css'

const mapStateToProps = (state) => ({
  showAddModal: state.modal
})

const mapDispatchToProps = {
  _showModal: showModal,
  _addTodo: addTodo
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
    const showAddModal = this.props.showAddModal.slice(-1)[0] || false
    const modal = showAddModal.show ? <AddTodo/> : null

    const todos = <CreateTodo
        todoTitle="Hello World"
        todoBody="This is body of my Hello World todo"
        done={() => console.log("done")}
        reject={() => console.log("reject")}
        expand={() => console.log("expand")}
      />
    
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
