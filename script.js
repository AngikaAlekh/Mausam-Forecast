const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3709087ebmshd53d0bd1a44b364p1bd5ffjsnaa06f8f2164d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
