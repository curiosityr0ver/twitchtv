import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../ACTIONS';
import { useNavigate } from "react-router-dom";


import { Field, formValues, reduxForm } from 'redux-form';

const StreamCreate = (props) => {

    const navigate = useNavigate();

    function inputNew(formProps) {

        return (
            <div className='ui input'>
                <input id={formProps.label} type="text" placeholder={formProps.label} {...formProps.input} />
            </div>
        )
    }



    return (
        <div>
            <h3>Ho</h3>
            <form className='ui form' onSubmit={props.handleSubmit((res) => { props.createStream(res); navigate("/"); })}>
                <label><b>Title:</b></label>
                <br />
                <Field name="title" component={inputNew} label="Enter Title" />
                <br />
                <label><b>Description:</b></label>
                <br />
                <Field name="description" component={inputNew} label="Enter Description" />
                <br />
                <button style={{ marginTop: "1px" }} id='submit' className='ui button primary'>Submit</button>
            </form>
        </div >
    );
}



export default connect(null, { createStream })(reduxForm({
    form: 'streamCreate'

})(StreamCreate));
