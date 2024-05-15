import React from "react";

import "./Menu.css";
const Menu = ({ data }) => {
  return (
    <div className="menu">
      <h1>Explore Our Menu</h1>
      <p>
        Sales Pro stands out for its commitment to excellence in every aspect of
        the shopping experience. With a vast selection of products,
        user-friendly interface, secure transactions, and attentive customer
        service, Sales Pro ensures that every shopping journey is convenient,
        enjoyable, and hassle-free. Whether you're shopping for yourself or
        searching for the perfect gift, Sales Pro is your trusted partner in
        online shopping.
      </p>
      {data ? (
        <div className="list">
          {data.map((item) => (
            <div key={item.id} className="list-item">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <h2>$ {item.price}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <hr />
    </div>
  );
};

export default Menu;
