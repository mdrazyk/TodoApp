import React, { Component } from 'react'
import TodosFactory from './components/todo/TodosFactory'
import Logo from './components/logo/Logo'
import Sortable from 'sortablejs'
import './App.css'
import './components/todo/Todo.css'

class App extends Component {
  componentDidMount(){
    const items = document.getElementById("items")
    Sortable.create(items, {
      animation: 150,
      filter: ".Todo-body",
      preventOnFilter: false
    })
  }

  render() {
    const todos = TodosFactory('http://foo.com')
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <nav className="App-nav">
          <a><p>Active Todos</p></a>
          <a><p>Add Todo</p></a>
          <a><p>Completed Todos</p></a>
        </nav>
        <div id="items" className="App-body">
          {todos}
        </div>
      </div>
    );
  }
}

export default App;
