import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import TodoList from './TodoList';

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos();
  }

  getTodos = () => {
    axios.get('http://localhost:5000/api/todos')
      .then(res => {
        if(res.data){
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteTodo = (id) => {

    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { todos } = this.state;

    return(
      <div>
        <h1>Todo</h1>
        <hr/>
        <Input getTodos={this.getTodos}/>
        <TodoList todos={todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default Todo;