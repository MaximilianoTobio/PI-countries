import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountriesDetail, cleanDetail } from "../redux/actions";
import style from "./DetailCountries.module.css";

const DetailCountries = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesDetail(id)); // me traigo el detalle del pais
    return () => dispatch(cleanDetail()); // limpio el estado global details para que no aparezca el detalle del pais anterior
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      
      <h1>{detail.name}</h1>
      <img src={detail.image} alt="imagen" width="200px" height="150px" />
      <div className={style.countryDetail}>
      <p>ID: {detail.id}</p>
      <p>CONTINENT: {detail.continent}</p>
      <p>CAPITAL: {detail.capital}</p>
      <p>POPULATION: {detail.population}</p>
      <p>AREA: {detail.area}</p>
      <p>SUB-REGION: {detail.subregion}</p>
      </div>
      {detail.activities && detail.activities.length > 0 && (
        <>
        
        <div className={style.activities}>
        <h2>Activities:</h2>
          {detail.activities.map((activity) => (
            <div key={activity.id}>
              <p>NAME: {activity.name}</p>
              <p>DURATION: {activity.duration}</p>
              <p>SEASON: {activity.season}</p>
              <p>DIFFICULTY: {activity.difficulty}</p>
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailCountries;

    
         
