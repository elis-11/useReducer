import { useState } from "react";

export const Events = () => {
  // state for str DATA
  const [strings, setStrings] = useState(["apple", "banana", "cherry"]);
  const [stringNew, setStringNew] = useState("");

  const [objects, setObjects] = useState([
    { _id: "f1", name: "apple" },
    { _id: "f2", name: "banana" },
    { _id: "f3", name: "cherry" },
  ]);
  const [objectNew, setObjectNew] = useState({
    _id: Date.now().toString(),
    // _id: new Date().toString(),
    name: "",
  });
  console.log(objectNew);
  //STRING
  const handleStringChange = (e) => {
    setStringNew(e.target.value);
  };

  const addString = () => {
    setStrings([...strings, stringNew]);
    setStringNew("");
  };

  const deleteString = (sringIndex) => {
    setStrings((strings) => {
      return strings.filter((str) => str !== sringIndex);
    });
  };
  // OBJECT
  const handleObjectChange = (e) => {
    setObjectNew({ ...objectNew, name: e.target.value });
  };

  const addObject = () => {
    setObjects([...objects, objectNew]);
    setObjectNew({
      ...objectNew,
      _id: Date.now().toString(),
      name: "",
    });
  };
  const deleteObject = (id) => {
    const deleteObj = objects.filter((obj) => obj._id !== id);
    setObjects(deleteObj);
  };

  return (
    <div>
      <div className="strings">
        <h2>STRINGS:</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input type="text" value={stringNew} onChange={handleStringChange} />
          <button onClick={addString}>+</button>
        </div>
        <div className="items">
          {strings.map((str, index) => (
            <div key={index} className="item">
              <span className="index">{index + 1}: &nbsp;</span>
              <span className="name">{str} &nbsp;</span>
              <button onClick={() => deleteString(str)}>x</button>
            </div>
          ))}
        </div>
      </div>

      <div className="objects">
        <h2>OBJECTS:</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            name="text"
            value={objectNew.name}
            onChange={handleObjectChange}
          />
          <button onClick={addObject}>+</button>
        </div>
        <div className="items">
          {objects.map((obj, index) => (
            <div key={obj._id} className="item">
              <span className="item">
                {index + 1}: &nbsp;{obj.name} &nbsp;&nbsp;
              </span>
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => deleteObject(obj._id)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
