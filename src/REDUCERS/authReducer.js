export default (user = null, action) => {


    if (action.type === "SIGN_IN") {  // first two ifs are for actions and last is for global variable
        return action.payload
    }
    if (action.type === "SIGN_OUT") {
        return null
    } else {
        return user
    }
}
