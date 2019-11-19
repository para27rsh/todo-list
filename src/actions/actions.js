export const ON_CHANGE_HANDLER = "ON_CHANGE_HANDLER";
export const ON_CLICK_HANDLER = "ON_CLICK_HANDLER";
export const ON_DELETE_HANDLER = "ON_DELETE_HANDLER";
export const ON_EDIT_HANDLER = "ON_EDIT_HANDLER";
export const CLEAR_HANDLER = "CLEAR_HANDLER";
export const CHECKBOX_HANDLER = "CHECKBOX_HANDLER";

export function onChangeHandler() {
  return {
    type: ON_CHANGE_HANDLER
  };
}
export function onClickHandler() {
  return {
    type: ON_CLICK_HANDLER
  };
}
export function onDeleteHandler(id) {
  return {
    type: ON_DELETE_HANDLER,
    id
  };
}
export function onEditHandler(id) {
  return {
    type: ON_EDIT_HANDLER,
    id
  };
}
export function clearHandler() {
  return {
    type: CLEAR_HANDLER
  };
}
export function checkboxChangeHandler(id) {
  return {
    type: CHECKBOX_HANDLER,
    id
  };
}
