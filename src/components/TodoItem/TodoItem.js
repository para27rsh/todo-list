import React, { Component } from "react";
import styles from "./TodoItem.module.css";
export default class TodoItem extends Component {
  render() {
    const iconStyle = {
      color: "#008000"
    };
    return (
      <div className={styles.todoItem}>
        <li className="list-group-item text-capitilize d-flex justify-content-between my-2">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="materialUnchecked"
              onChange={this.props.checkboxChangeHandler}
              checked={this.props.item.checkboxFlag}
            />
            <label className="form-check-label" htmlFor="materialUnchecked">
              {this.props.item.checkboxFlag ? (
                <h6>
                  <strike>{this.props.item.value}</strike>
                </h6>
              ) : (
                <h6>{this.props.item.value}</h6>
              )}
            </label>
          </div>

          {this.props.item.checkboxFlag ? (
            <div className="todo-icon">
              <i class="fas fa-check-circle" style={iconStyle}></i>
            </div>
          ) : (
            <div className="todo-icon">
              <span
                onClick={this.props.onEditHandler}
                className="mx-2 text-success"
              >
                <i className="fas fa-pen"></i>
              </span>
              <span
                onClick={this.props.onDeleteHandler}
                className="mx-2 text-danger"
              >
                <i className="fas fa-trash"></i>
              </span>
            </div>
          )}
        </li>
      </div>
    );
  }
}
