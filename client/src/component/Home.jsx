import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterByActivity,
  filterByContinent,
  orderByPopulation,
  order,
} from "../redux/actions";
import Card from "./Card";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const continent = useSelector((state) => state.sortContinent);
  const population = useSelector((state) => state.sortPopulation);
  const countriesOrder = useSelector((state) => state.countriesOrder);
  const activityCountry = useSelector((state) => state.countriesWithActivities);
  const [loading, setLoading] = useState(true);
  const [currentPaginated, setCurrentPaginated] = useState();

  useEffect(() => {
    dispatch(getAllCountries());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    setCurrentPaginated(countries);
  }, [countries]);
  useEffect(() => {
    setCurrentPaginated(continent);
  }, [continent]);
  useEffect(() => {
    setCurrentPaginated(population);
  }, [population]);
  useEffect(() => {
    setCurrentPaginated(countriesOrder);
  }, [countriesOrder]);
  useEffect(() => {
    setCurrentPaginated(activityCountry);
  }, [activityCountry]);
 


  const renderCountryCard = (country) => (
    <Card
      key={country.id}
      id={country.id}
      image={country.image}
      name={country.name}
      continent={country.continent}
    />
  );
  const handleFilterByContinent = (event) => {
    dispatch(filterByContinent(event.target.value));
    
    
  };
  const handleFilterByPopulation = (event) => {
    dispatch(orderByPopulation(event.target.value));
    
  };
  const handlerOrderAlphabetically = (event) => {
    dispatch(order(event.target.value));
    
  };
  const handleFilterByActivity = (event) => {
    dispatch(filterByActivity(event.target.value));
    
  };

  return (
    <div className={style.background}>
      <div className={style.container}>
      <div className={style.selects}>
      
        <select className={style.select} onChange={handleFilterByContinent}>
          <option>CONTINENTS</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select className={style.select} onChange={handleFilterByPopulation}>
          <option>POPULATION</option>
          <option value="Max">Max population</option>
          <option value="Min">Min population</option>
        </select>
      
     
        <select className={style.select} onChange={handlerOrderAlphabetically}>
          <option>ORDER</option>
          <option value="A-Z">A to Z</option>
          <option value="Z-A">Z to A</option>
        </select>
      
        <select className={style.select} onChange={handleFilterByActivity}>
          <option>BY ACTIVITY</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Autumn">Autumn</option>
          <option value="Spring">Spring</option>
        </select>
      
      </div>
      <div>
        <SearchBar />
      </div>
      <div className={style.cards}>
      <div>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <Paginated
            itemsPerPage={10}
            data={currentPaginated}
            renderItem={renderCountryCard}
          />
        )}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
