import _ from "lodash"

export default (streams = null, action) => {

    switch (action.type) {
        case "FETCH_STREAMS": return { ...streams, ..._.mapKeys(action.payload, 'id') }
        case "CREATE_STREAM": return { ...streams, [action.payload.id]: action.payload }
        case "EDIT_STREAM": return { ...streams, [action.payload.id]: action.payload }
        case "DELETE_STREAM": return _.omit(streams, action.payload)

        default: return streams;

    }
}
