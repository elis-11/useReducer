import { useState } from "react";
import menuJson from "./card.json";
import "./Card.scss";

export const Card = () => {
  const [items, setItems] = useState(menuJson);
  const menuItems = [...new Set(menuJson.map((item) => item.category))];

  const filterItems = (current) => {
    const newItem = menuJson.filter((item) => {
      return item.category === current;
      // comparing category for displaying data
    });
    setItems(newItem);
  };

  return (
    <div className="Card">
        <h1 className="">Our Menu</h1>
        <div className="buttons">
          {menuItems.map((item, id) => (
            <div
              className={filterItems === item ? "active" : "filter"}
              key={id}
              onClick={() => filterItems(item)}
            >
              {item}
            </div>
          ))}
          <div onClick={() => setItems(menuJson)} >
            All
          </div>
        </div>
        <div className="">
          <div className="cards">
            {items.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.img} alt={item.title} className=" " />
                <div className="body">
                  <div className="name">{item.title}</div>
                  <div>
                    price:
                    {item.price} €
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};
