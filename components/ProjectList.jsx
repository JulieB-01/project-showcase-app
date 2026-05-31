import React, {useState} from "react";



function ProjectList({ projects }) {
  return (
    <>
      <h3>Project List</h3>
      {projects.length === 0 ? (
        <p>No projects added yet.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.title}</strong>
              <br />
              {project.description}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProjectList;