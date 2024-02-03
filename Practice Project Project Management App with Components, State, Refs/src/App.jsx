import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projets: [],
    tasks: [],
  });

  function handelStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handelCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectid = Math.random();
      const newProject = {
        ...projectData,
        id: projectid,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projets: [...prevState.projets, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projets: prevState.projets.filter(
          (item) => item.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskid = Math.random();
      const newTask = {
        text: text,
        id: taskid,
        projectId: prevState.selectedProjectId
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (item) => item.id !== id
        ),
      };
    });
  }

  const selectedProject = projectState.projets.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeletTask={handleDeleteTask}
      tasks={projectState.tasks}
    ></SelectedProject>
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handelCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onSelectProjet={handleSelectProject}
        onStartAddProject={handelStartAddProject}
        projects={projectState.projets}
        selectedProjectId={projectState.selectedProjectId}
      />
      {/* <NewProject/> */}
      {content}
    </main>
  );
}

export default App;
