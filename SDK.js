//     fetch('http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

function Weather (city) {
  this.city = city;
  this.init = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no")
    .then(response => response.json())
    .then(data => { 
      this.temp = data.current.temp_c;
      this.tempF = data.current.temp_f;
      return this;

    });
}
    




  