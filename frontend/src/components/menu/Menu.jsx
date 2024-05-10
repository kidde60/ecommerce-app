import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menu.css";
const Menu = () => {
  const [data, setData] = useState();

  // Effect to fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        // Make GET request to API
        const response = await axios.get("https://fakestoreapi.com/products");

        // Set the fetched data to state
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error.message);
      }
    }
    console.log(data);
    // Call fetchData function to initiate data fetching
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="App">
      <h1>Explore Our Menu</h1>
      {data ? (
        <div className="list">
          {data.map((item) => (
            <div key={item.id} className="list-item">
              <img src={item.image} alt={item.title} />

              <h2>${item.price}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Menu;
