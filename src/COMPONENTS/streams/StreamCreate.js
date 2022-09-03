import React from 'react';
import { useEffect } from 'react';


import { Field, formValues, reduxForm } from 'redux-form';

const StreamCreate = (props) => {
    useEffect(() => {
        document.getElementById("emptyTitle").style.display = "none";
        document.getElementById("emptyDescription").style.display = "none";
        var valid = false;


        if (!document.getElementById("Enter Title").value) {
            document.getElementById("emptyTitle").style.display = "block";
        } else {
            valid = true;
            document.getElementById("emptyTitle").style.display = "none";
        }
        if (!document.getElementById("Enter Description").value) {
            valid = false;
            document.getElementById("emptyDescription").style.display = "block";
        } else {
            document.getElementById("emptyDescription").style.display = "none";
        }
        if (!valid) {
            document.getElementById("submit").disabled = true;
        } else {
            document.getElementById("submit").disabled = false;
        }
    });

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
            <form className='ui form' onSubmit={props.handleSubmit((res) => { console.log(res) })}>
                <label><b>Title:</b></label>
                <br />
                <Field name="title" component={inputNew} label="Enter Title" />
                <label style={{ color: "#FF4A4A" }} id='emptyTitle'>Enter valid title</label>
                <br />
                <label><b>Description:</b></label>
                <br />
                <Field name="description" component={inputNew} label="Enter Description" />
                <label style={{ color: "#FF4A4A" }} id='emptyDescription'>Enter valid description</label>
                <br />
                <button style={{ marginTop: "1px" }} id='submit' disabled className='ui button primary'>Submit</button>
            </form>
        </div>
    );
}



export default reduxForm({
    form: 'streamCreate'

})(StreamCreate);
