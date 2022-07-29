import axios from "axios";
import { useState, useEffect } from "react";
import CountryList from "./CountryList";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCoutries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesData(res.data));
  }, []);

  const filterCountries = (e) => {
    const toSearch = e.target.value;
    const searchedCountries = countriesData.filter((c) =>
      c.name.common.toLowerCase().startsWith(toSearch.toLowerCase())
    );
    setFilteredCoutries(searchedCountries);
  };

  return (
    <>
      Find countries : <input onChange={filterCountries} />
      <CountryList filteredCountries={filteredCountries} />
    </>
  );
}

export default App;
