import { useState } from "react";
import menuJson from "./card.json";
import "./Card.scss";

export const Card = () => {
  const [items, setItems] = useState(menuJson);
  const menuItems = [...new Set(menuJson.map((item) => item.category))];

  const filterItem = (curcat) => {
    const newItem = menuJson.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItems(newItem);
  };

  return (
    <div className="Card">
      <div className="header">
        <h1 className="">Our Menu</h1>
        <div className="buttons">
          {menuItems.map((item, id) => (
            <button className={filterItem === item ? "active" : "filter"} key={id} onClick={() => filterItem(item)}>
              {item}
            </button>
          ))}
          <button className="btn" onClick={() => setItems(menuJson)}>
            All
          </button>
        </div>
        <div className="">
          <div className="cards">
            {items.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.img} alt={item.title} className=" " />
                <div className="body">
                  <div className="name">
                    {item.title} &nbsp;&nbsp;&nbsp;&nbsp;price:&nbsp;&nbsp;
                    {item.price} €
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
