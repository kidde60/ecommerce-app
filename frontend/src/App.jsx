import react, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
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
    // console.log(data);
    // Call fetchData function to initiate data fetching
    fetchData();
  }, []); // E
  return (
    <>
      <Navbar data={data} />
      <Home data={data} />
    </>
  );
}

export default App;
