var React = require('react');
import todos from '../data/todos';
require("!style-loader!css-loader!sass-loader!../../sass/todoList.sass");

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = { todos: todos.filter((item) => {
      if(item.userId == 1) return item;
    }, []) };

    this.displayTodos = this.displayTodos.bind(this);
  }

  displayTodos(todo){
    return <li key={todo.id} value={todo.completed}>{todo.title}</li>;
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(this.displayTodos)}
        </ul>
      </div>
    );
  }
}

module.exports = TodoList;
