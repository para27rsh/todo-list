import React, { Component } from "react";
import styles from "./TodoInput.module.css";
export default class TodoInput extends Component {
  render() {
    const text = this.props.editFlag ? "Save Item" : "Add Item";

    return (
      <div>
        <div className="card card-body my-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>

            <input
              type="text"
              className="form-control text-capitilize"
              onChange={this.props.onChangeHandler}
              value={this.props.item}
              placeholder="Add a todo item"
            ></input>
          </div>
          <button
            type="submit"
            onClick={this.props.onClickHandler}
            className="btn btn-block btn-primary mt-3"
          >
            {text}
          </button>
        </div>
      </div>
    );
  }
}

// <form>
//           <input
//             type="text"
//             onChange={this.props.onChangeHandler}
//             value={this.props.val}
//           ></input>
//         </form>
//         <button onClick={this.props.onClickHandler}>
//           {this.props.editFlag ? "SAVE" : "ADD"}
//         </button>
