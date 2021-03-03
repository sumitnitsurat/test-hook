interface Json {
  [key: string]: any;
}
type Action = { payload: Json; type: string };
export default (state = {}, action: Action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
