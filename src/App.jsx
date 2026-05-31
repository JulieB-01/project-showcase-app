import React, { useState } from 'react';
import './App.css'
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import Form from '../components/Form';


function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  // State for list of submitted projects
  const [projects, setProjects] = useState([]);

  // Event handler for input changes
  const handleFormInput = (event) => {
    const { name, value} = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Event to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.title.trim() === ""){
      alert(`Project Title required`);
      return;
    }

    // Add new project to list, with unique id
  setProjects([...projects, {...formData, id: Date.now() }])

  // Clear input fields
  setFormData( {
    title: "",
    description: "" }
  );

    console.log("Form Submitted:", formData)
  }

  
  return(
    <div>
      <Header />
      <Form formData={formData} handleFormInput={handleFormInput} handleSubmit={handleSubmit}/>
      <ProjectList projects={projects} />
    </div>
  )
}
export default App
