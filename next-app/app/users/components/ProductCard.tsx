// this section is a part of server components
// server components can't handle interactivity
// if you want to enable interactivity use 'use client'

// "use client";

// if this component become dependent with other comps. then those comps. will become client comp.
import React from "react";
// React will inject 'use client' on this file if it's going to be used
// For now it's just provided
import AddToCart from "./AddToCart";

// using css styling module
// import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // apply cardContainer custom individual styling
    // browser will auto generate the class name
    // the name generated from next-app\postcss.config.mjs
    // <div className={styles.cardContainer}>

    // using tailwind's class selector instead
    // can also add hover behaviour
    // the advantage of tailwind is you can just modify css in just one place
    // without juggling back and forth to edit css file
    // <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">

    // now without much classes because button style already modified by daisy
    <div className="pt-3">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
