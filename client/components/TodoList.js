import React from 'react';
import FontAwesome from 'react-fontawesome';
require("!style-loader!css-loader!sass-loader!../../sass/todoList.sass");

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = { toggleList: false }
    this.item = this.item.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  item(todo){
    return (
      <li key={todo.id} value={todo.completed}>
        <div>
          {todo.completed ?
          <FontAwesome
            name="check"
            className="icon"
          /> : <FontAwesome
            name="ellipsis-h"
            className="icon"
          />}
        </div>
        <div>{todo.title}</div>
      </li>
    );
  }

  handleClick(){
    this.setState(prevState => ({
      toggleList: !prevState.toggleList
    }));
  }

  render () {
    return (
      <div className="todoDiv">
        <h5>This will be the twitch name: {this.props.user}
          <button>
            <FontAwesome
            name="caret-down"
            onClick={this.handleClick}
            />
          </button>
          <button>
            <FontAwesome
            name="comments"
            />
          </button>
        </h5>
        {this.state.toggleList ? <ul>
          {this.props.todos.map(this.item)}
        </ul> : null}
      </div>
    )
  }
}

export default TodoList;
