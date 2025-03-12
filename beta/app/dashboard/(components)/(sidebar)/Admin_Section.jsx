import React from "react";

const Admin_Section = ({ children }) => {
  return (
    <section className="w-full h-screen bg-red-300 flex flex-row">
      {children}
    </section>
  );
};

export default Admin_Section;
