import React from "react";
import { useState } from "react";

function Form( {handleSubmit, formData, handleFormInput}) {

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add new project</h3>
            <label>Title</label>
            <input type="text" name="title" value={formData.title} placeholder= "Project title" onChange={handleFormInput} />
            <br /><br />
            <label>Description</label>
            <textarea name="description" value={formData.description} placeholder="Project description" onChange={handleFormInput} /> 
            <br /><br />
            <button type="submit">Add project</button>
        </form>
    )
}

export default Form;
