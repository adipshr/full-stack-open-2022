import Country from "./Country";
import DisplayCountry from "./DisplayCountry";

export default function CountryList({ filteredCountries, displayCountry }) {
  const showCountries = () => {
    if (filteredCountries.length > 10)
      return <p>Too many matches, specify another filter</p>;
    else if (filteredCountries.length === 0) return <p>No Matches Found</p>;
    else if (filteredCountries.length === 1)
      return <DisplayCountry country={filteredCountries[0]} />;

    return filteredCountries.map((c) => {
      return <Country key={c.name.common} filteredCountries={c} />;
    });
  };

  const anyname = showCountries();

  return <ul>{anyname}</ul>;
}
