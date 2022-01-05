import React, {useState} from "react";

function Sushi({ sushi, handleAddEmptyPlate, handleDeductMoney }) {
  const { name, img_url, price} = sushi

  const [isEaten, setIsEaten] = useState(false);

  function handleClick(){
    setIsEaten(!isEaten)
    handleAddEmptyPlate("empty plate")
    handleDeductMoney(sushi.price)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
