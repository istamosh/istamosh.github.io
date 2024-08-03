// separate the interactive button away from ProductCart component
"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      {/* applying daisyUI button style */}
      <button
        className="btn btn-primary"
        onClick={() => console.log("clicky clicky.")}
      >
        Add To Cart!
      </button>
    </div>
  );
};

export default AddToCart;
