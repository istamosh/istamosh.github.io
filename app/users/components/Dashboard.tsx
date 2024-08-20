import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="text-right px-4 sm:px-16 space-y-3">
        <h1 className="text-3xl sm:text-9xl">Hello!</h1>
        <h1 className="text-md sm:text-3xl">I am Alfian Ferdinan</h1>
        <p className="text-xl sm:text-5xl">
          I am a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            Front End
          </span>{" "}
          Dev.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
