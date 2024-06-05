import ProjectForm from "@/components/ProjectForm";
import React from "react";

const page = () => {
  return (
    <div className="px-0 py-6">
      <h3 className="font-[700] text-[22px] mt-8 px-1">Add Project</h3>
      <ProjectForm />
    </div>
  );
};

export default page;
