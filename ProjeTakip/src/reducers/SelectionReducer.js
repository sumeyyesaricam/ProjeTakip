
export default (state = null, action) => {

    switch (action.type) {
        case 'select_library':
            debugger;
            return action.payload;
        default:
            return state;

    }
};