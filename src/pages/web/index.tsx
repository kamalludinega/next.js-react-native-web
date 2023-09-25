import Card from "@foodbag/web/components/Card";
import React from "react";
import "./global.css";
export const index = () => {
  const render = () => {
    let cards = [];
    for (let i = 0; i < 500; i++) {
      cards.push(<Card key={i.toString()} />);
    }
    return cards;
  };

  return (
    <div className="flex flex-1 flex-row flex-wrap gap-4 p-4">{render()}</div>
  );
};

export default index;
