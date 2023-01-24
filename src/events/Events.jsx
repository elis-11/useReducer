import { useState } from "react";

export const Events = () => {
  // state for str DATA
  const [strings, setStrings] = useState([
    "apple",
    "banana",
    "cherry",
  ]);
  const [stringNew, setStringNew] = useState("");

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

  const handleStringChange = (e) => {
    setStringNew(e.target.value);
  };

  const addString = () => {
    setStrings([...strings, stringNew]);
    setStringNew("");
  };

  const deleteFruitString = (sringIndex) => {
    setStrings((strings) => {
      return strings.filter(( str) => str !== sringIndex);
    });
  };

  return (
    <div>
      <div className="strings">
        <h2>STRINGS:</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            value={stringNew}
            onChange={handleStringChange}
          />
          <button onClick={addString}>+</button>
        </div>
        <div className="items">
          {strings.map((str, index) => (
            <div key={index} className="item">
              <span className="index">{index + 1}: &nbsp;</span>
              <span className="name">{str} &nbsp;</span>
              <button onClick={() => deleteFruitString(str)}>x</button>
            </div>
          ))}
        </div>
      </div>

      <div className="objects">
        <h2>OBJECTS:</h2>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <div className="items">
          {fruitObjects.map((str, index) => (
            <div key={str._id} className="item">
              <div className="item">
                {index + 1}: &nbsp;{str.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
