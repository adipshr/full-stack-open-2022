import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filtredCountries, setFiltredCoutries] = useState([]);

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
    setFiltredCoutries(searchedCountries);
  };

  if (filtredCountries.length === 1) {
    return (
      <>
        {console.log("", filtredCountries)}
        Find countries : <input onChange={filterCountries} />
        {filtredCountries.map((c) => (
          <>
            <h1>{c.name.common}</h1>
            <p>Capital : {c.capital}</p>
            <p>Area : {c.area}</p>
            <h2>Languages : </h2>
            <ul>
              {Object.values(c.languages).map((lang) => (
                <li>{lang}</li>
              ))}
            </ul>
            <img src={c.flags.png} alt="" />
          </>
        ))}
      </>
    );
  } else
    return (
      <>
        Find countries : <input onChange={filterCountries} />
        {filtredCountries.length <= 10 ? (
          filtredCountries.map((c) => (
            <p key={c.name.common}>{c.name.common}</p>
          ))
        ) : (
          <p>Too many matches, specify another filter</p>
        )}
      </>
    );
}

export default App;
