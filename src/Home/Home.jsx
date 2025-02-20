import { useState } from "react";
// Database
import products from "../db/data.js";
import Card from "../components/Card.jsx";
import Reccomended from "../Recommended/Recommended";
import Sidebar from "../SideBar/Sidebar.jsx";
import Nav from "../Navigation/Nav.jsx";
import Products from "../Products/Products.jsx";

const Home = ({ setUser }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    company: null,
    price: null,
    color: null,
    category: null,
  });

  const [query, setQuery] = useState("");

  // ------------ Input Filter ---------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ------------ Radio Filter ---------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSelectedFilters((prevFilters) => {
      let updatedFilters = { ...prevFilters };

      if (name === "price") {
        updatedFilters.price = value;
      } else if (name === "colors") {
        updatedFilters.color = value;
      } else if (name === "category") {
        updatedFilters.category = value;
      }

      return updatedFilters;
    });
  };

  // ------------ Button Filter ---------------
  const handleClick = (category) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      company: category, // Specific company ko filter karo
    }));
  };

  function filteredData(products, filters, query) {
    let filteredProducts = products;

    // **Search Filter**
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // **Apply Multiple Filters**
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice }) => {
        return (
          (!filters.category || category === filters.category) &&
          (!filters.color || color === filters.color) &&
          (!filters.company || company === filters.company) &&
          (!filters.price || newPrice == filters.price)
        );
      }
    );

    return filteredProducts.map(
      ({ img, title, prevPrice, newPrice, discountPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          prevPrice={prevPrice}
          newPrice={newPrice}
          discountPrice={discountPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedFilters, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav setUser={setUser} handleInputChange={handleInputChange} query={query} />
      <Reccomended
        handleClick={handleClick}
        selectedCategory={selectedFilters.company}
      />
      <Products result={result} />
    </>
  );
};
export default Home;
