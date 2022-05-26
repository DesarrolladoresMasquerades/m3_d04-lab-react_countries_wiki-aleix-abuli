// src/App.js
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from './components/Navbar';
import countriesJSON from './countries.json';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    setCountries(countriesJSON)
  }, []);

  return (
  <div className="App">
    <Navbar />

    <div className="container">
      <div className="row">

        <CountriesList countries={countriesJSON} />

        <Routes>
          {countries.map((country) => (
            <Route exact path={`/${country.alpha3Code}`} element={<CountryDetails country={country} countriesList={countriesJSON} />} />
          ))}
        </Routes>

      </div>
    </div>

  </div>
  );
};

export default App;
