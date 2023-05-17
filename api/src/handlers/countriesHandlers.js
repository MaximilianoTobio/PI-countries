const { getCountries, getCountryById } = require("../controllers/countriesController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const country = await getCountries(name);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const getCountryIdHandler = async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await getCountryById(idPais);
    if(!country) throw new Error ('Country not found');
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

module.exports = {getCountriesHandler, getCountryIdHandler};