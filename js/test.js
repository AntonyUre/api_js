const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c006ef48f0mshb57d98b86b6be60p1a483cjsn00b9ca41c695',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

fetch(
  "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&id=2172797&lang=null&units=imperial&mode=json",
  options
).then(res => res.json())
  .then(response => { 
    console.log(response)
  });
