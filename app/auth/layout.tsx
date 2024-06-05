import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  );
};

export default layout;
