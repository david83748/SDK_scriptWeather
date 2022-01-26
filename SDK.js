function Weather(city, token) {
  this.city = city;
  this.token = token;
}

Weather.prototype.init = function () {
  return fetch(
    (`http://api.weatherapi.com/v1/current.json?key=${this.token}&q=${this.city}&aqi=no`)
  )
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      const itm = {
        temp: data.current.temp_c
      };
      return itm;
    });

    
};





  