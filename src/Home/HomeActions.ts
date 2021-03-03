import { Dispatch } from "redux";

const simpleAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
  });
};

export default simpleAction;
