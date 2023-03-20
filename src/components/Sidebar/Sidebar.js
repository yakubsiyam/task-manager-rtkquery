import React from "react";
import ProjectsList from "../ProjectsList/ProjectsList";
import TeamMembers from "../TeamMembers/TeamMembers";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProjectsList />
      <TeamMembers />
    </div>
  );
};

export default Sidebar;
