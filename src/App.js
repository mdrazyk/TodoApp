import React, { Component } from 'react'
import Todo from './components/todo/Todo'
import './App.css'
import './components/todo/Todo.css'

class App extends Component {
  done = () => console.log('Done')
  reject = () => console.log('Reject')
  expand = () => console.log('Expand')
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <nav className="App-nav">
          <a><p>Add Todo</p></a>
          <a><p>Active Todos</p></a>
          <a><p>Completed Todos</p></a>
        </nav>
        <div className="App-body">
          <div className="Todo">
            <p className="Todo-header">Kupić masło</p>
            <p className="Todo-body">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
            <div className="Todo-footer">
              <p style ={{fontSize: "40px", color: "#FF6F00"}}>
                &#10005;
              </p>
              <p  style ={{fontSize: "40px"}}>
                &#8801;
              </p>
              <p style ={{fontSize: "40px", color: "#4CAF50"}}>
                &#10003;
              </p>
            </div>
          </div>
          <div>
           <div className="Todo">
            <p className="Todo-header">Wyciągnąć ze zmywarki</p>
            <p className="Todo-body">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum

            </p>
                <div className="Todo-footer">
                <p style ={{fontSize: "40px", color: "#FF6F00"}}>
                  &#10005;
                </p>
                <p  style ={{fontSize: "40px"}}>
                  &#8801;
                </p>
                <p style ={{fontSize: "40px", color: "#4CAF50"}}>
                  &#10003;
                </p>
              </div>
            </div>
          </div>
          <div>
          <div className="Todo-single">
            <p className="Todo-header">Wyciągnąć ze zmywarki</p>
                <div className="Todo-footer-single">
                <p style ={{fontSize: "40px", color: "#FF6F00"}}>
                  &#10005;
                </p>
                <p style ={{fontSize: "40px", color: "#4CAF50"}}>
                 &#10003;
                </p>
              </div>
            </div>
          </div>
          <Todo 
            todoTitle="Weź wypierdalaj!"
            todoBody="Sam spierdalaj leszczu jeden!!!!!"
            done={this.done}
            expand={this.expand}
            reject={this.reject}
            />
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
        </div>
      </div>
    );
  }
}

export default App;
