import { useState } from "react";
import Data from "./card.json";
import "./Card.scss";

export const Card = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((value) => value.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  return (
    <div className="Card">
      <div className="header">
        <h1 className="">Our Menu</h1>
        <div className="buttons">
          {menuItems.map((value, id) => {
            return (
              <button className="btn" key={id} onClick={() => filterItem(value)}>
                {value}
              </button>
            );
          })}
          <button className="btn" onClick={() => setItem(Data)}>
            All
          </button>
        </div>
        <div className="">
          <div className="cards">
            {item.map((value) => {
              return (
                <div className="card" key={value.id}>
                  <img src={value.img} alt={value.title} className=" " />
                  <div className="body">
                    <div className="name">
                      {value.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                      {value.price}
                    </div>
                    <div className="text">{value.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
