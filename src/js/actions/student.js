export const ADD_STUDENT = 'ADD_STUDENT';
export const Get_ALL_STUDENT = 'Get_ALL_STUDENT';
export function addStudent(data) {
  return dispatch => {
    dispatch({
      type: ADD_STUDENT,
      data
    });
  }
}
