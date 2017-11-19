import React, { Component } from 'react'
import TodosFactory from './components/todo/TodosFactory'
import Logo from './components/logo/Logo'
import AddTodo from './components/addTodo/AddTodo'
import Sortable from 'sortablejs'
import './App.css'
import './components/todo/Todo.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAddTodo: false
    }
  }
  componentDidMount(){
    const items = document.getElementById("items")
    Sortable.create(items, {
      animation: 150,
      filter: ".Todo-body",
      preventOnFilter: false
    })
  }

  openAddTodo = () => this.setState((prevState, props) =>({
    showAddTodo: !this.state.showAddTodo
  }))

  render() {
    const modal = this.state.showAddTodo ? <AddTodo cancel={this.openAddTodo}/> : null
    
    const todos = TodosFactory('http://foo.com')
    
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <nav className="App-nav">
          <a><p>Active Todos</p></a>
          <a onClick={this.openAddTodo}><p>Add Todo</p></a>
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

export default App;
