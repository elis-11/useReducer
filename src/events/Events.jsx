import { useState } from "react";

export const Events = () => {
  // state for fruit DATA
  const [fruitStrings, setFruitStrings] = useState([
    "apple",
    "banana",
    "cherry",
  ]);
  const [fruitStringNew, setFruitStringNew] = useState("");

  const [fruitObjects, setFruitObjects] = useState([
    { _id: "f1", name: "apple" },
    { _id: "f2", name: "banana" },
    { _id: "f3", name: "cherry" },
  ]);
  const [fruitObjectNew, setFruitObjectNew] = useState({
    _id: Date.now().toString(),
    // _id: new Date().toString(),
    name: "",
});

console.log(fruitObjectNew)
  const handleFruitStringChange = (e) => {
    setFruitStringNew(e.target.value);
  };

  const addString = () => {
    setFruitStrings([...fruitStrings, fruitStringNew]);
    setFruitStringNew("");
  };

  const deleteFruitString = (fruitIndex) => {
    setFruitStrings((fruitStrings) => {
      return fruitStrings.filter(( fruit) => fruit !== fruitIndex);
    });
  };

  return (
    <div>
      <div className="strings">
        <h2>STRINGS:</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            value={fruitStringNew}
            onChange={handleFruitStringChange}
          />
          <button onClick={addString}>+</button>
        </div>
        <div className="items">
          {fruitStrings.map((fruit, index) => (
            <div key={index} className="item">
              <span className="index">{index + 1}: &nbsp;</span>
              <span className="name">{fruit} &nbsp;</span>
              <button onClick={() => deleteFruitString(fruit)}>x</button>
            </div>
          ))}
        </div>
      </div>

      <div className="objects">
        <h2>OBJECTS:</h2>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <div className="items">
          {fruitObjects.map((fruit, index) => (
            <div key={fruit._id} className="item">
              <div className="item">
                {index + 1}: &nbsp;{fruit.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
