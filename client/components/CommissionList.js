import React from 'react';
import FontAwesome from 'react-fontawesome';
import TodoList from './TodoList';
import todos from '../data/todos'; // replaced with api call later
require("!style-loader!css-loader!sass-loader!../../sass/todoList.sass");

class CommissionList extends React.Component {
  constructor(props){
    super(props);
    this.state = { todos };

    this.displayComissions = this.displayComissions.bind(this);
    this.headers = this.headers.bind(this);
  }

  displayComissions(todos){
    let unqiueUsers =[];
    todos.forEach((todo) => {
      if(!unqiueUsers.includes(todo.userId)) unqiueUsers.push(todo.userId);
    });

    return (
      <div>
        {unqiueUsers.map(this.headers)}
      </div>
    );
  }

  headers(user){
    let filteredTodos = this.state.todos.filter((todo) => {
        return todo.userId === user;
      });

    return(
      <div className="commissionHeader" key={user}>
        <TodoList todos={filteredTodos} user={user}/>
      </div>
    );
  }

  render() {
    return (
      <div className="todoDisplayDiv">
        <h3>Current Commissions List</h3>
        {this.displayComissions(this.state.todos)}
      </div>
    );
  }
}

module.exports = CommissionList;
