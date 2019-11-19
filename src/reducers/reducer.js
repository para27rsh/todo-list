import * as actionTypes from "../actions/actions";
const initialState = {
  item: "",
  items: [],
  editFlag: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_CHANGE_HANDLER:
      return Object.assign({}, state, {
        item: action.event.target.value
      });
      break;
    case actionTypes.ON_CLICK_HANDLER:
      let copyArr = [...state.items];
      copyArr.push({
        value: state.item,
        checkboxFlag: false
      });
      return Object.assign({}, state, {
        items: copyArr,
        item: ""
      });
      break;
    case actionTypes.ON_DELETE_HANDLER:
      let deletedArr = state.items.filter((m, i) => action.id !== i);
      return Object.assign({}, state, {
        items: deletedArr
      });
      break;

    case actionTypes.ON_EDIT_HANDLER:
      let editArr = state.items.filter((m, i) => action.id !== i);

      return Object.assign({}, state, {
        items: editArr,
        item: state.items[action.id].value,
        editFlag: true
      });
      break;
    case actionTypes.CLEAR_HANDLER:
      let clearArr = [...state.items];
      clearArr.length = 0;

      return Object.assign({}, state, {
        items: clearArr
      });
      break;
    case actionTypes.CHECKBOX_HANDLER:
      let copyCheckArr = [...state.items];
      copyCheckArr.forEach((m, i) => {
        if (action.id === i) {
          copyCheckArr[i].checkboxFlag = !state.items[i].checkboxFlag;
        }
      });
      return Object.assign({}, state, {
        items: copyCheckArr
      });
      break;
    default:
      return state;
  }
};

export default rootReducer;
