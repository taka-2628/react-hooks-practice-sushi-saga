import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushi, onMoreSushi, handleAddEmptyPlate, handleDeductMoney }) {
  return (
    <div className="belt">
      {fourSushi.map((sushi) => (<Sushi key={sushi.id} sushi={sushi} handleAddEmptyPlate={handleAddEmptyPlate} handleDeductMoney={handleDeductMoney}/>))}
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
