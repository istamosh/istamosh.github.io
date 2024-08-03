// this section is a part of server components
// server components can't handle interactivity
// if you want to enable interactivity use 'use client'

// "use client";

// if this component become dependent with other comps. then those comps. will become client comp.
import React from "react";
// React will inject 'use client' on this file if it's going to be used
// For now it's just provided
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
