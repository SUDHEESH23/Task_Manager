import React from "react";

export default function About() {
  const cardStyles = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "300px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  const paragraphStyles = {
    fontSize: "1.2rem",
    lineHeight: "1.5",
    color: "#fff",
    textAlign: "justify",
    textShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
    hyphens: "auto",
  };

  return (
    <>
      <div style={cardStyles}>
        <p style={paragraphStyles}>
          Welcome to Task Manager. This application helps users stay organized and on top of their tasks and to-do lists. With the help of task manager, users can easily create new tasks, prioritize them, set due dates, and track their progress. Task manager is particularly useful for busy professionals, students, and anyone who needs to keep track of multiple projects and deadlines.


        </p>
      </div>
    </>
  );
}