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

  const [forms, setForms] = useState([
    { _id: "f1", name: "apple" },
    { _id: "f2", name: "banana" },
    { _id: "f3", name: "cherry" },
  ]);
  const [formNew, setFormNew] = useState("");
 
  //STRINGS
  const handleStringChange = (e) => {
    // console.log({e: e});
    // console.log({target:e.target})
    // console.log({value: e.target.value})
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
  // OBJECTS
  const handleObjectChange = (e) => {
    setObjectNew({ ...objectNew, name: e.target.value });
  };

  const addObject = () => {
    setObjects([...objects, objectNew]);
    setObjectNew({
      ...objectNew,
      name: "",
    });
  };
  const deleteObject = (id) => {
    setObjects(objects.filter((obj) => obj._id !== id));
  };
  // FORMS
  const handleFormChange = (e) => {
    setFormNew({ ...formNew, name: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setForms([...forms, formNew]);
    setFormNew({ ...formNew, name: "" });
  };
  const removeForm = (id) => {
    setForms(forms.filter((form) => form._id !== id));
  };

  return (
    <div>
      {/* STRINGS */}
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
      {/* OBJECTS */}
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
      {/* FORM */}
      <div className="forms">
        <h2>FORMS:</h2>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            name="name"
            value={formNew.name}
            onChange={handleFormChange}
          />
          <button type="submit">+</button>
        </form>
        <div className="form">
          {forms.map((form, index) => (
            <div key={form._id} className="item">
              <span className="name">
                {index + 1}: &nbsp; {form.name} &nbsp;
              </span>
              <button onClick={() => removeForm(form._id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
