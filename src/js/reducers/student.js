import {
    ADD_STUDENT
} from "../actions/student";

const initialState = {
    students: []
};

const actionsMap = {
    [ADD_STUDENT]: (state, data) => {
        return {
            ...state,
            students: state.students.concat([data])
        };
    }
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action.data) : state;
}
