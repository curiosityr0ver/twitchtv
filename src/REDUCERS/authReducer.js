export default (user = null, action) => {


    if (action.type === "SIGN_IN") {
        return action.payload
    }
    if (action.type === "SIGN_OUT") {
        return null
    } else {
        return user
    }
}
