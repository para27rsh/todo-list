import React, { Component } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./Layout.css";
import uuid from "uuid";
export default class Layout extends Component {
  render() {
    return (
      <div className="base">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4"></div>
            <h3 className="text-capitalize text-center todoListHeader ">
              Todo Input
            </h3>
          </div>
        </div>

        <TodoInput
          onChangeHandler={this.props.onChangeHandler}
          onClickHandler={this.props.onClickHandler}
          item={this.props.item}
          editFlag={this.props.editFlag}
        ></TodoInput>
        <TodoList
          onDeleteHandler={id => this.props.onDeleteHandler(id)}
          items={this.props.items}
          onEditHandler={id => this.props.onEditHandler(id)}
          clearHandler={this.props.clearHandler}
          checkboxChangeHandler={id => this.props.checkboxChangeHandler(id)}
        ></TodoList>
      </div>
    );
  }
}
