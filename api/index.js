//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  server.listen(3001, async () => {
    const allCountries = await Country.findAll();
    if(!allCountries.length){
      const apiRes = await axios.get('https://restcountries.com/v3/all');
      const apiCountries = apiRes.data.map((data) => {
        return {
          id: data.cca3,
          name: data.name.common,
          image: data.flags[0],
          continent: data.continents[0],
          capital: data.capital ? data.capital[0] : 'Not found',
          subregion: data.subregion,
          area: data.area,
          population: data.population
        }
      })
      await Country.bulkCreate(apiCountries);
    }
    console.log('listening at 3001'); 
  });
});
