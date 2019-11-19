import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import {
  onChangeHandler,
  onClickHandler,
  onDeleteHandler,
  onEditHandler,
  clearHandler,
  checkboxChangeHandler
} from "../../actions/actions";
const mapStateToProps = state => {
  return {
    item: state.item,
    items: state.items,
    editFlag: state.editFlag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: event => dispatch({ type: "ON_CHANGE_HANDLER", event }),
    onClickHandler: () => dispatch({ type: "ON_CLICK_HANDLER" }),
    onDeleteHandler: id => dispatch({ type: "ON_DELETE_HANDLER", id }),
    onEditHandler: id => dispatch({ type: "ON_EDIT_HANDLER", id }),
    clearHandler: () => dispatch({ type: "CLEAR_HANDLER" }),
    checkboxChangeHandler: id => dispatch({ type: "CHECKBOX_HANDLER", id })
  };
};

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default LayoutContainer;
