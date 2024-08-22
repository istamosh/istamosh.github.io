import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="text-right px-4 sm:px-16 space-y-3">
        <h1 className="text-3xl sm:text-9xl bg-clip-text text-transparent bg-gradient-to-l from-teal-500 via-cyan-500 to-green-500">
          Hello!
        </h1>
        <h1 className="text-md sm:text-3xl">I am Alfian Ferdinan</h1>
        <p className="text-xl sm:text-5xl">
          Welcome to my{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
            digital playground
          </span>
          .
        </p>
      </div>
    </>
  );
};

export default Dashboard;
