const kiev = new Weather("Kiev");
kiev.init.then(data => {
    document.getElementById('block').innerHTML = ` ℃ ${data.temp} , ℉ ${data.tempF}`
});