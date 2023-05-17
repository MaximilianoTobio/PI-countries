const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (name) => {
  if(!name) return allCountries = await Country.findAll();
  const quer = name.toLowerCase();
  return await Country.findAll(
    {where:
      {name: {
        [Op.iLike]: `%${name}%`,
      }
    }});
}

const getCountryById = async (id) => {
  return await Country.findByPk(id);
}

module.exports = { getCountries, getCountryById };