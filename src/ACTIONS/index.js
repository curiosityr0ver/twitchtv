import streams from "../APIS/streams"

export const signIn = (user) => {
    return {
        type: "SIGN_IN",
        payload: user
    }
}

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const key = getState().user.email
    const response = await streams.post('/streams', { ...formValues, key });

    dispatch({ type: "CREATE_STREAM", payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('/streams');

    dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete('/streams' + id);

    dispatch({ type: "DELETE_STREAM", payload: id });
};

export const EditStream = (id, formValues) => async (dispatch) => {
    const response = await streams.put('/streams' + id, formValues);

    dispatch({ type: "EDIT_STREAM", payload: response.data });
};