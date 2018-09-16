import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';


export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then((dummyUserData) => {
      // dispatch actions to reducers to set initial state of application
      console.log(dummyUserData);
      dispatch(hideLoading());
    });
  };
}
