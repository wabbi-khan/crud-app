import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        alignContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="display-1">Page not found</h1>
    </div>
  );
};

export default NotFound;
