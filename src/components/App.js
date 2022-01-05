import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [plates, setPlates] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => setSushi(response))
  }, [])

  function fourSushi(){
    if ( money < 1 ) {
      return []
    } else {
      return [...sushi].slice(startIndex, startIndex + 4)
    }
  }
  
  function hundleMoreSushi(){
    setStartIndex(startIndex + 4)
  }

  function handleAddEmptyPlate(plate){
    setPlates([...plates, plate])
  }

  function handleDeductMoney(price){
    setMoney(money - price)
  }

  return (
    <div className="app">
      <SushiContainer fourSushi={fourSushi()} onMoreSushi={hundleMoreSushi} handleAddEmptyPlate={handleAddEmptyPlate} handleDeductMoney={handleDeductMoney}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
