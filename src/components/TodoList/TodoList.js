import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center ">todo list</h3>

          {this.props &&
            this.props.items &&
            this.props.items.map((m, i) => {
              return (
                <TodoItem
                  key={i}
                  item={m}
                  onDeleteHandler={() => this.props.onDeleteHandler(i)}
                  onEditHandler={() => this.props.onEditHandler(i)}
                  checkboxChangeHandler={() =>
                    this.props.checkboxChangeHandler(i)
                  }
                ></TodoItem>
              );
            })}
          <button
            type="button"
            onClick={this.props.clearHandler}
            className="btn btn-block btn-danger text-capitalize mt-3"
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

// TodoList
// <div>
// {
//   this.props.listArr.map((m, i) => {
//     return (
//       <TodoItem
//         item={m}
//         onDeleteHandler={() => this.props.onDeleteHandler(i)}
//         onEditHandler={() => this.props.onEditHandler(i)}
//       ></TodoItem>
//     );
//   });
// }
// </div>
